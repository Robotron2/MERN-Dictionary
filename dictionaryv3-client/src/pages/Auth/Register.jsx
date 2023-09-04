import { Link } from "react-router-dom"
import Layout from "../../components/Layouts/Layout"

const Register = () => {
	return (
		<>
			<Layout title={"Register || RoboDict"}>
				<div className="container">
					<div className="login-container">
						<h2 className="login-title">Register Here</h2>
						<form>
							<div className="custom-input-group">
								<label htmlFor="username">Email</label>
								<input type="text" id="username" name="username" required placeholder="Enter your valid email here" />
							</div>
							<div className="custom-input-group">
								<label htmlFor="password">Password</label>
								<input type="password" id="password" name="password" required placeholder="Enter your password here" />
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
