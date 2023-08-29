import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	histories: []
})

export const UserModel = mongoose.model("User", userSchema)

// module.exports = UserModel
