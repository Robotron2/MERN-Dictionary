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
			res.status(201).json({ data: wordData })
		} else {
			throw Error("Internal server error.")
		}
	} catch (error) {
		// console.log(error.response.data)

		return res.status(500).json({ error: error.message })
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
