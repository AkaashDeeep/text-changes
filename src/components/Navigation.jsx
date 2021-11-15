import React  from 'react';
import {NavLink} from "react-router-dom";

let Nav = (props) => {
	let blue = "blue";
	let red = "red";
	let tectcolor = props.theme === 'dark'?'white':'blue';
	let imgcolor = props.theme === 'dark'?'./images/menu2.png':'./images/menu.png';
	const open =()=> {
		document.getElementById('listM').classList.add('animate');
		document.getElementById('overlay').classList.add('mask');
		document.body.classList.add('lockScroll');
	}
	const remove =()=> {
		document.getElementById('listM').classList.remove('animate');
		document.getElementById('overlay').classList.remove('mask');
		document.body.classList.remove('lockScroll');
	}
	return (
		<>	
		<div className = {`navBox ${props.theme}`}>
				<div className = "navBrand">
					<NavLink to ="/" className = "brandTypography">
						
						<h1 ><img src={imgcolor} alt="menu" onClick={open} className="mobileMenu"/><span style = {{color:blue}}>{props.title}</span><span style = {{color:red}}>{props.title1}</span></h1>
					</NavLink>
				</div>
				<div className = "navMenu">
					<div className="" id="overlay" onClick={remove}></div>
					<ul className = {`list ${props.theme}`}  id="listM">
						<NavLink  to ="/" style={{color:tectcolor}}><li onClick={remove}>{props.menu1}</li></NavLink>
						<NavLink  to ="/portfolio" style={{color:tectcolor}}><li onClick={remove}>{props.menu2}</li></NavLink>
						<NavLink  to ="/service" style={{color:tectcolor}}><li onClick={remove}>{props.menu3}</li></NavLink>
						<NavLink  to ="/about" style={{color:tectcolor}}><li onClick={remove}>{props.menu4}</li></NavLink>
						<NavLink  to ="/contact" style={{color:tectcolor}}><li onClick={remove}>{props.menu5}</li></NavLink>
					</ul>
					<div className="toggleBox">
						<input type="checkbox" id="btn" onClick={props.enableDarkMode}/>
						<label htmlFor="btn"></label>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;