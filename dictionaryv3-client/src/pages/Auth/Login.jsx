import { Link, useLocation, useNavigate } from "react-router-dom"
import Layout from "../../components/Layouts/Layout"
import { useState } from "react"
import axios from "axios"
import useAuth from "./../../components/customHooks/useAuth"
import { toast } from "react-hot-toast"

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
			// console.log(response)
			if (response && response.data.success) {
				toast.success(response && response.data.message)
				setAuth({
					...auth,
					user: response.data.userData,
					token: response.data.token
				})
				localStorage.setItem("auth", JSON.stringify(response.data))
				navigate(location.state || `/user/word`)
			}
		} catch (error) {
			setEmail("")
			setPassword("")
			toast.error(error.response.data.error)
			console.log(error.response.data.error)
		}
	}

	return (
		<>
			<Layout title={"Login || RoboDict"}>
				<div className="container">
					<div className="login-container">
						<h2 className="login-title">Login Here</h2>
						<form onSubmit={handleSubmit}>
							<div className="custom-input-group">
								<label htmlFor="username">Email</label>
								<input type="text" placeholder="Enter your valid email here" onChange={(e) => setEmail(e.target.value)} value={email} required />
							</div>
							<div className="custom-input-group">
								<label htmlFor="password">Password</label>
								<input type="password" placeholder="Enter your password here" onChange={(e) => setPassword(e.target.value)} value={password} required />
							</div>
							<button type="submit" className="login-button">
								Login
							</button>

							<Link to={"/register"}>
								<button type="submit" className="login-button-outline">
									Register
								</button>
							</Link>
						</form>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Login
