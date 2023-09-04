import { Link, useLocation, useNavigate } from "react-router-dom"
import Layout from "../../components/Layouts/Layout"
import { useState } from "react"
import useAuth from "../../components/customHooks/useAuth"
import axios from "axios"
import { toast } from "react-hot-toast"

const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const location = useLocation()
	const [auth, setAuth] = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`, { email, password })
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
			} else {
				setEmail("")
				setPassword("")
				toast.error(response.data.message)
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
			<Layout title={"Register || RoboDict"}>
				<div className="container">
					<div className="login-container">
						<h2 className="login-title">Register Here</h2>
						<form onSubmit={handleSubmit}>
							<div className="custom-input-group">
								<label htmlFor="username">Email</label>
								<input type="text" id="username" name="username" required placeholder="Enter your valid email here" onChange={(e) => setEmail(e.target.value)} />
							</div>
							<div className="custom-input-group">
								<label htmlFor="password">Password</label>
								<input type="password" id="password" name="password" required placeholder="Enter your password here" onChange={(e) => setPassword(e.target.value)} />
							</div>
							<button type="submit" className="login-button">
								Register
							</button>

							<Link to={"/login"}>
								<button type="submit" className="login-button-outline">
									Login
								</button>
							</Link>
						</form>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Register
