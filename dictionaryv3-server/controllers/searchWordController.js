import axios from "axios"
import _ from "lodash"
import { UserModel } from "../models/userModel.js"

export const searchController = async (req, res) => {
	let { id } = req.params
	let { searchedWord } = req.body
	// console.log(searchedWord)
	// let user = await UserModel.findById(id)
	// console.log(user)

	try {
		if (!searchedWord) {
			throw Error("Enter a word to be searched!")
		}
		searchedWord = _.toLower(searchedWord)
		// console.log(id)
		const user = await UserModel.findById(id)
		if (!user) {
			console.log("User not found")
			return
		}

		const apiUrl = `${process.env.WORD_API}/${searchedWord}`
		const response = await axios.get(apiUrl)

		if (response.data) {
			const wordData = response.data
			const match = user.histories.filter((history) => history === searchedWord)
			if (match.length == 0) {
				user.histories.push(searchedWord)
			}
			await user.save()
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
}

export const historyController = async (req, res) => {
	const { id } = req.params
	try {
		if (!id) {
			throw Error("Valid id must be provided")
		}
		const user = await UserModel.findById(id)
		if (user) {
			res.status(200).json({
				success: true,
				histories: user.histories
			})
		}
	} catch (error) {
		res.status(500).json({
			error: error.message
		})
	}
}

export const deleteHistoryController = async (req, res) => {
	const { id } = req.params
	try {
		const user = await UserModel.findById(id)
		if (!user) {
			throw Error("User not found")
		}
		user.histories = []
		await user.save()
		res.status(200).json({
			success: true,
			message: "All histories cleared"
		})
	} catch (error) {
		res.status(500).json({
			error: error.message
		})
	}
}
