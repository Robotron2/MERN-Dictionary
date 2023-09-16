/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import useAuth from "../../components/customHooks/useAuth"
import { useEffect, useState } from "react"
import Layout from "../../components/Layouts/Layout"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../../components/Loading"

const History = () => {
	const [auth] = useAuth()
	const authUserId = auth.user.id
	const [isEmpty, setIsEmpty] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const [history, setHistory] = useState([])
	const navigate = useNavigate()

	const getUserHistory = async () => {
		setIsLoading(true)
		const userHistory = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/history/${authUserId}`)
		console.log(userHistory.data.histories)

		const histories = userHistory.data.histories
		if (histories.length > 0) {
			setIsEmpty(false)
			setHistory(histories)
			setIsLoading(false)
			console.log(isEmpty)
		}
		if (histories.length < 0) {
			setIsEmpty(true)
		}
	}

	const handleClear = async () => {
		try {
			//
			const deletedHistory = await axios.delete(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/delete-history/${authUserId}`)
			console.log(deletedHistory)
			navigate("/user/word")
		} catch (error) {
			//
		}
	}

	useEffect(() => {
		getUserHistory()
	}, [])

	return (
		<>
			<Layout title={"Histories || Robodict"}>
				<div className="container-fluid">
					<h2 className="text-center hist">Histories</h2>
				</div>
				{isEmpty && (
					<div>
						<center>
							<p>No searched words yet.</p>
						</center>
					</div>
				)}
				{isLoading && !isEmpty && <Loading />}
				<center>
					<div className="history-container">
						{history.map((h, i) => {
							return (
								<Link to={`/user/history/${h}`} key={i + 1}>
									<p>{h}</p>
								</Link>
							)
						})}
					</div>
				</center>
				{isEmpty ? (
					<div className="container-fluid">
						<Link to={"/user/word"}>
							<button className="bottom-right-button">Home</button>
						</Link>
					</div>
				) : (
					<div className="container-fluid">
						<button className="bottom-right-button" onClick={handleClear}>
							Clear All
						</button>
					</div>
				)}
			</Layout>
		</>
	)
}

export default History
