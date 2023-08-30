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
