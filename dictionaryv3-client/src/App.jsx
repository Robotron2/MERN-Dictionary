import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Word from "./pages/Word"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/word" element={<Word />} />
			</Routes>
		</>
	)
}

export default App
