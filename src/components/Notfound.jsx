import React from "react";

let Notfound = (props) => {
	let headingcolor = props.theme === 'dark'?'white':'red';
	return(
		<>
			<div className="container">
				<h1 style={{color:headingcolor}}>{props.title}</h1>
			</div>
		</>
	);
}

export default Notfound;