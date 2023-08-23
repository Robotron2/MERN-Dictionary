import bcrypt from "bcrypt"
import { UserModel } from "../models/userModel.js"
import JWT from "jsonwebtoken"

const createToken = (_id) => {
	return JWT.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

export const registerController = async (req, res) => {
	// console.log("Sign in logic here")
	const { email, password } = req.body

	try {
		//validation
		// if (!email || !password) {
		// 	throw Error("All fields must be filled!")
		// }
		// if (!validator.isEmail(email)) {
		// 	throw Error("Email is not valid")
		// }
		// if (!validator.isStrongPassword(password)) {
		// 	throw Error("Password is not strong enough")
		// }

		const exists = await UserModel.findOne({ email })

		if (exists) {
			throw Error("Email exists")
		}

		const saltRound = 10

		const salt = await bcrypt.genSalt(saltRound)
		const hash = await bcrypt.hash(password, salt)

		const user = await UserModel.create({
			email,
			password: hash
		})

		//create token
		const token = createToken(user._id)

		res.status(200).json({ email, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

export const loginController = async (req, res) => {
	const { email, password } = req.body

	try {
		//validation
		if (!email || !password) {
			throw Error("All fields must be filled!")
		}

		const user = await UserModel.findOne({ email })

		if (!user) {
			throw Error("Incorrect email")
		}

		const match = await bcrypt.compare(password, user.password)
		if (!match) {
			throw Error("Incorrect password")
		}

		//create token
		const token = createToken(user._id)

		res.status(200).json({ email, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

const loginUser = async (req, res) => {
	//
	const { email, password } = req.body

	try {
		//validation
		if (!email || !password) {
			throw Error("All fields must be filled!")
		}

		const user = await User.findOne({ email })

		if (!user) {
			throw Error("Incorrect email")
		}

		const match = await bcrypt.compare(password, user.password)
		if (!match) {
			throw Error("Incorrect password")
		}

		//create token
		const token = createToken(user._id)

		res.status(200).json({ email, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
	// res.json({ msg: "Login successfully" })
}
