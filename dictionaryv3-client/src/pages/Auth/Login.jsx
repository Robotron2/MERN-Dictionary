import { Link, useLocation, useNavigate } from "react-router-dom"
import Layout from "../../components/Layouts/Layout"
import { useState } from "react"
import axios from "axios"
import useAuth from "./../../components/customHooks/useAuth"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const location = useLocation()
	const [auth, setAuth] = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`, { email, password })
			console.log(response)
			if (response && response.data.success) {
				setAuth({
					...auth,
					user: response.data.userData,
					token: response.data.token
				})
				localStorage.setItem("auth", JSON.stringify(response.data))
				navigate(location.state || `/word`)
			} else {
				//
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Layout title={"Login || RoboDict"}>
				<div className="login-container">
					<h2 className="login-title">Login Here</h2>
					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<label htmlFor="username">Email</label>
							<input type="text" placeholder="Enter your valid email here" onChange={(e) => setEmail(e.target.value)} value={email} required />
						</div>
						<div className="input-group">
							<label htmlFor="password">Password</label>
							<input type="password" placeholder="Enter your password here" onChange={(e) => setPassword(e.target.value)} value={password} required />
						</div>
						<button type="submit" className="login-button">
							Login
						</button>
						{/* <button className="login-button-outline">
							<Link to={"/register"}>Register</Link>
						</button> */}
						<Link to={"/register"}>
							<button type="submit" className="login-button-outline">
								Register
							</button>
						</Link>
					</form>
				</div>
			</Layout>
		</>
	)
}

export default Login

// const [email, setEmail] = useState("")
// 	const [password, setPassword] = useState("")
// const navigate = useNavigate()
// const location = useLocation()
// const [auth, setAuth] = useAuth()

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		try {
// 			const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`, { email, password })
// if (res && res.data.success) {import { axios } from 'axios';

// 	toast.success(res && res.data.message)
// 	setAuth({
// 		...auth,
// 		user: res.data.user,
// 		token: res.data.token
// 	})
// 	localStorage.setItem("auth", JSON.stringify(res.data))
// 	navigate(location.state || `/`)
// } else {
// 	toast.error(res.data.message)
// }
// 		} catch (error) {
// 			console.log(error)
// 			toast.error("Something went wrong, please try again")
// 		}
// 	}
