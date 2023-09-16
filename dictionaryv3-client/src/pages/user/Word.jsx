// import { Link } from "react-router-dom"
import Layout from "../../components/Layouts/Layout"
import axios from "axios"
import { useState } from "react"
import Loading from "../../components/Loading"
import { Link } from "react-router-dom"

/* eslint-disable react/no-unescaped-entities */
const Word = () => {
	const [search, setSearch] = useState("")
	const [results, setResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [found, setFound] = useState(true)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFound(false)
		try {
			const fetchUserData = JSON.parse(localStorage.getItem("auth")).userData
			const { id } = fetchUserData
			setIsLoading(true)
			// console.log(id)

			const result = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/user-auth/search/${id}`, { searchedWord: search })

			// console.log(result)
			// // console.log(result.data.data)
			// // setResults(result.data.data)
			if (result.status == 200) {
				setResults(result.data.data)
				setFound(true)
			} else if (result.statusText == "Not Found") {
				setFound(false)
				console.log("Not found")
			}

			setSearch("")
			setIsLoading(false)
		} catch (error) {
			// setCheckFound(false)
			// console.log(error)
			if (error.response) {
				console.log(error.response.status === 404)
				setSearch("")
				setIsLoading(false)
				setFound(false)
			}
		}
	}

	return (
		<>
			<Layout>
				<div className="word-container">
					<div className="form-div" style={{ marginTop: "-1vmin" }}>
						<form method="post" onSubmit={handleSubmit}>
							<input type="text" placeholder="Enter the word you want to search." className="form-control" onChange={(e) => setSearch(e.target.value)} value={search} />
						</form>
					</div>

					{isLoading && <Loading />}
					{!isLoading && !found && (
						<div>
							<div className="">
								<h4 className="flow-text">No Definitions Found...</h4>
								<h4 className="flow-text">Sorry pal, we couldn't find definitions for the word you were looking for.</h4>
								<h4 className="flow-text">You can try the search again at later time or head to the web instead.</h4>
							</div>
						</div>
					)}

					{found && (
						<aside>
							{results.map((result, i) => {
								return (
									<div key={i + 1}>
										<div className="custom-class">
											<h1 className="capital-first">
												{result.word}
												<span>
													<em>{`${i + 1}  `}</em>
												</span>
											</h1>
										</div>

										{result.phonetic !== undefined && (
											<div className="custom-class">
												<p>{result.phonetic}</p>
											</div>
										)}

										{result.phonetic === undefined && (
											<div className="custom-class">
												<p>{result.phonetics.text}</p>
											</div>
										)}

										{result.meanings !== undefined && <div>{result.meanings[0].partOfSpeech}</div>}
										{result.meanings !== undefined && (
											<div className="flow-text">
												<div>
													<h4>
														<em>definition(s)</em>
													</h4>
												</div>
												{result.meanings[0].definitions.map((definition, i) => {
													return (
														<div key={i + 1}>
															<div>
																<h6 style={{ margin: "1.1rem" }}>
																	<strong>{i + 1}. </strong>
																	{definition.definition}
																</h6>
															</div>
														</div>
													)
												})}
											</div>
										)}
										{result.meanings !== undefined && result.meanings[1] !== undefined && (
											<div className="flow-text">
												<div>
													<h4>
														<small>
															<em>more....</em>
														</small>
													</h4>
												</div>
												{result.meanings[1].definitions.map((definition, i) => {
													return (
														<div key={i + 1}>
															<div>
																<h6 style={{ margin: "1.1rem" }}>
																	<strong>{i + 1}. </strong>
																	{definition.definition}
																</h6>
															</div>
														</div>
													)
												})}
											</div>
										)}
										{result.meanings[0].synonyms !== undefined && result.meanings[0].synonyms.length !== 0 && (
											<div className="flow-text">
												<div>
													<h4>
														<em>Synonyms(s)</em>
													</h4>
												</div>
												{result.meanings[0].synonyms.map((synonym, i) => {
													return (
														<div key={i + 1}>
															<div>
																<h6 style={{ margin: "1.1rem" }}>
																	<strong>{i + 1}. </strong>
																	{synonym}
																</h6>
															</div>
														</div>
													)
												})}
											</div>
										)}
									</div>
								)
							})}
						</aside>
					)}

					<Link to={"/user/history"}>
						<button className="bottom-right-button">History</button>
					</Link>
				</div>
			</Layout>
		</>
	)
}

export default Word
