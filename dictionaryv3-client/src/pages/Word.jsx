import { Link } from "react-router-dom"
import Layout from "../components/Layouts/Layout"

/* eslint-disable react/no-unescaped-entities */
const Word = () => {
	return (
		<>
			<Layout>
				<div className="form-div">
					<form method="post">
						<input type="text" placeholder="Enter the word you want to search." className="form-control" />
					</form>
				</div>

				<div>
					<div className="word-meaning">
						<h2 className="word-title">Serendipity</h2>
						<p className="definition">The occurrence and development of events by chance in a happy or beneficial way.</p>
						<p className="example">"A fortunate stroke of serendipity"</p>
					</div>
					<div className="word-meaning">
						<h2 className="word-title">Eloquent</h2>
						<p className="definition">Fluent or persuasive in speaking or writing.</p>
						<p className="example">"An eloquent speech"</p>
					</div>
				</div>
				<Link to={"/user/history"}>
					<button className="bottom-right-button">Click Me</button>
				</Link>
			</Layout>
		</>
	)
}

export default Word
