import React from "react";

let About = (props) => {
	let headingcolor = props.theme === 'dark'?'white':'red';
	return(
		<>
			<div className="container">
				<h1 style={{color:headingcolor}}>{props.title}</h1>
				<br/>
				<p style={{color:headingcolor}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
				demonstrate the visual form of a document or a typeface without relying on meaningful content. <br/><br/>
				Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia
				In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
				demonstrate the visual form of a document or a typeface without relying on meaningful content. <br/><br/>
				Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia
				In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
				demonstrate the visual form of a document or a typeface without relying on meaningful content. 
				Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
			</div>
		</>
	);
}

export default About;