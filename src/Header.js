import React from 'react'
import img from './1.png'
import './Header.css';
const Header=()=>{
	return(
		<div className="Header">
		<div className="header left">
			<img className="i0" src={img} />
			<p className="i0">WeddingsOnly</p>
		</div>
		<div className="header right">
			<h6 className="i1">Vendor Login </h6>
			<h6 className="i1 vendor">email </h6>
			<input className="i1 " type="email" name="email" />
			<h6 className="i1 vendor">Password </h6>
			<input className="i1" type="password" name="password" />
			<button className="i1 vendor" type="submit" >Login</button>
			<a className="vendor" href="">trouble login?</a>
		</div>
		</div>
	)
}

export default Header;