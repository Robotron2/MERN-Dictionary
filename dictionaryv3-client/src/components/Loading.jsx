const Loading = () => {
	return (
		// <svg
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	style={{ margin: "auto", background: "inherit", display: "block", shapeRendering: "auto" }}
		// 	width="200px"
		// 	height="200px"
		// 	viewBox="0 0 100 100"
		// 	preserveAspectRatio="xMidYMid"
		// >
		// 	<circle cx="50" cy="50" r="15" strokeWidth="3" stroke="#29B6F6" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
		// 		<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
		// 	</circle>
		// </svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			style={{ margin: "auto", background: "inherit", display: "block", shapeRendering: "auto" }}
			width="244px"
			height="244px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<path
				fill="none"
				stroke="#3b7d9b"
				strokeWidth={8}
				strokeDasharray="130.8603533935547 125.72857482910155"
				d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
				strokeLinecap="round"
				style={{ transform: "scale(0.7100000000000001)", transformOrigin: "50px 50px" }}
			>
				<animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.282051282051282s" keyTimes="0;1" values="0;256.58892822265625" />
			</path>
		</svg>
	)
}

export default Loading
