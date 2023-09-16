import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Word from "./pages/user/Word"
import PrivateRoute from "./components/Routes/PrivateRoute"
import History from "./pages/user/History"
import HistorySearch from "./pages/user/HistorySearch"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				<Route path="/user" element={<PrivateRoute />}>
					<Route path="word" element={<Word />} />
					<Route path="history" element={<History />} />
					<Route path="history/:word" element={<HistorySearch />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
