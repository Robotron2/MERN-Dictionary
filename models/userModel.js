import mongoose from "mongoose"

const historySchema = new mongoose.Schema({
	word: {
		type: String,
		required: true,
		unique: true
	},
	id: {
		type: String,
		required: true,
		unique: true
	}
})

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		unique: true
	},
	histories: [historySchema]
})

export const HistoryModel = mongoose.model("historyModel", historySchema)
export const UserModel = mongoose.model("User", userSchema)
