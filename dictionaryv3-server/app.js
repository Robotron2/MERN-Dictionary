import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
// import userRoute from "./routes/userRoute.js"
import { homePageController } from "./controllers/misc.js"

//config env
dotenv.config()

//database connect
connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*") // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.get("/", homePageController)

app.use("/api/v1/auth", authRoute)
// app.use("/api/v1/user", userRoute)

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log(`App is running on port ${port}`)
})
