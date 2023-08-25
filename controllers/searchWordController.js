import axios from "axios"

export const searchController = async (req, res) => {
	const { searchedWord } = req.body

	try {
		if (!searchedWord) {
			throw Error("Enter a word to be searched!")
		}
		const apiUrl = `${process.env.WORD_API}/${searchedWord}`
		const response = await axios.get(apiUrl)

		if (response.data) {
			const wordData = response.data
			res.status(200).json({ success: true, data: wordData })
		} else {
			throw Error("Internal server error.")
		}
	} catch (error) {
		// console.log(error.response.data)
		if (error.message == "Request failed with status code 404") {
			return res.status(404).json({ success: false, error: error.response.data })
		}

		return res.status(500).json({ success: false, error: error.message })
	}

	// axios
	// 	.get(apiUrl)
	// 	.then((response) => {
	// 		// Handle the API response data
	// 		// console.log(response.data)
	// 		res.status(200).json({ data: response.data })
	// 	})
	// 	.catch((error) => {
	// 		// Handle errors
	// 		console.error(error)
	// 	})
}
