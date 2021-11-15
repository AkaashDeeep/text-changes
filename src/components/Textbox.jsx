import React, {useState} from "react";

let TextBox = (props) => {
	let[text, setText] = useState("");
	let textCaseup = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};
	let textCaselo = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	let textCasecopy = () => {
		let copyText = document.getElementById("boxText");
  			copyText.select();
  			document.execCommand("copy");
	};

	let permission = (event) => {
		setText(event.target.value);
	};
	let backcolor = props.theme === 'dark'?'#ffe564':'white';
	return(
		<>
			<div className = {`textContainer`}>
				<div className = {`dropbox ${props.theme}`}>
					<h1 style={{color: props.theme === 'dark'?'white':'red'}}>{props.title}</h1>
					<br/>
					<textarea className="adjtextArea " type="text" value ={text} id ="boxText" onChange ={permission} style={{backgroundColor:backcolor}}>
					</textarea>
					<br/><br/>
					<button disabled ={text.length===0} type ="button" className="btn" onClick ={textCaseup} >{props.btnTitle}</button>
					<button type ="button" className="btn" onClick = {textCaselo}>{props.btnTitle2}</button>
					<button type ="button" className="btn" onClick = {textCasecopy}>{props.btnTitle3}</button>
					<br/><br/>
					<h2>Preview</h2>
					<br/>
					<p>{text}</p>
					<br/>
					<p>Number Of Words :{text.split(" ").filter((element)=>{return element.length!==0}).length}</p> 
					<p>Number Of Character :{text.length}</p> 
					<p>Read Time :{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Min</p>
				</div>
			</div>
		</>
	);
}

export default TextBox;