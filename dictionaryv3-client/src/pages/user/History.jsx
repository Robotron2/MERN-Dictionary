/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import useAuth from "../../components/customHooks/useAuth"
import { useEffect, useState } from "react"
import Layout from "../../components/Layouts/Layout"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"

const History = () => {
	const [auth] = useAuth()
	const authUserId = auth.user.id
	const [isEmpty, setIsEmpty] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const [history, setHistory] = useState([])

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

	useEffect(() => {
		getUserHistory()
	}, [])

	return (
		<>
			<Layout title={"Histories || Robodict"}>
				<div className="container-fluid">
					<h2 className="text-center hist">Histories</h2>
				</div>
				{isLoading && <Loading />}
				<center>
					<div className="history-container">
						{history.map((h, i) => {
							return (
								<Link key={i + 1}>
									<p>{h}</p>
								</Link>
							)
						})}
					</div>
				</center>
				{/* <div className="container-fluid">
					<Link to={"/"}>
						<button className="bottom-right-button">Clear All</button>
					</Link>
				</div> */}

				{/* <div className="container">
					{
						<table className="table">
							<tbody>
								
							</tbody>
						</table>
					}
					<table></table>
				</div> */}
			</Layout>
		</>
	)
}
{
	/* <table className="table">
<tbody>
    return (
    <Link key={i + 1}>
        <tr>{h}</tr>
    </Link>
    )
</tbody>
</table> */
}

export default History

// const SearchHistory = () => {
// 	const searchedWords = JSON.parse(localStorage.getItem("history"))
// 	return (
// 		<motion.div className="row " animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
// 			{searchedWords.map((searchedWord, index) => {
// 				return (
// 					<div className="col s6 m3" key={index + 1}>
// 						<Link to={`/search/${searchedWord}`}>
// 							<div className="card-panel light-blue lighten-3 myrowclass">
// 								<span className="white-text">{searchedWord}</span>
// 							</div>
// 						</Link>
// 					</div>
// 				)
// 			})}
// 		</motion.div>
// 	)
// }

// export default SearchHistory
