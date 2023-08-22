import express from "express"
import { loginController, registerController } from "../controllers/authController.js"

const router = express.Router()

//Authentication routes
//Sign in route
router.post("/register", registerController)

//Login route
router.post("/login", loginController)

export default router
