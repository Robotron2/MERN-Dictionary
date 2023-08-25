import express from "express"
import { loginController, registerController } from "../controllers/authController.js"
// import { requireSignIn } from "../middlewares/authMiddleware.js"
import { searchController } from "../controllers/searchWordController.js"
import { randomWordController } from "../controllers/misc.js"

const router = express.Router()

//Authentication routes
//Sign in route
router.post("/register", registerController)

//Login route
router.post("/login", loginController)

//go to homepage
// router.post("/user-auth/search", requireSignIn, searchController)
router.post("/user-auth/search", searchController)

router.get("/user-auth/random", randomWordController)

export default router
