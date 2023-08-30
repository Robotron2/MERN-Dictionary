import { Link } from "react-router-dom"
import Layout from "../../components/Layouts/Layout"

const Login = () => {
	return (
		<>
			<Layout title={"Login || RoboDict"}>
				<div className="login-container">
					<h2 className="login-title">Login Here</h2>
					<form>
						<div className="input-group">
							<label htmlFor="username">Email</label>
							<input type="text" id="username" name="username" required placeholder="Enter your valid email here" />
						</div>
						<div className="input-group">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" name="password" required placeholder="Enter your password here" />
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
// 	const navigate = useNavigate()
// 	const location = useLocation()
// 	const [auth, setAuth] = useAuth()

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		try {
// 			const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`, { email, password })
// 			if (res && res.data.success) {
// 				toast.success(res && res.data.message)
// 				setAuth({
// 					...auth,
// 					user: res.data.user,
// 					token: res.data.token
// 				})
// 				localStorage.setItem("auth", JSON.stringify(res.data))
// 				navigate(location.state || `/`)
// 			} else {
// 				toast.error(res.data.message)
// 			}
// 		} catch (error) {
// 			console.log(error)
// 			toast.error("Something went wrong, please try again")
// 		}
// 	}
