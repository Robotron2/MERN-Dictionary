import Layout from "../components/Layouts/Layout"
import { Link } from "react-router-dom"

const HomePage = () => {
	return (
		<Layout>
			<div className="container">
				<div className="intro">
					<p>Welcome to our dictionary web app. Search for meanings, definitions, and more.</p>
				</div>
				<div className="cta-buttons">
					<Link className="cta-button" to={"/login"}>
						Login
					</Link>
					<Link className="cta-button" to={"/register"}>
						Register
					</Link>
				</div>
				<div className="features">
					<div className="feature">
						<div className="feature-icon">☼</div>
						<div className="feature-title">Word Definitions</div>
						<p>Quickly find detailed definitions for words.</p>
					</div>
					<div className="feature">
						<div className="feature-icon">📚</div>
						<div className="feature-title">Synonyms &amp; Antonyms</div>
						<p>Discover synonyms and antonyms for any word.</p>
					</div>
					<div className="feature">
						<div className="feature-icon">📖</div>
						<div className="feature-title">Word Pronunciation</div>
						<p>Listen to the correct pronunciation of words.</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default HomePage
