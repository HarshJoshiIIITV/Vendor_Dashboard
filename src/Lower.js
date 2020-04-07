import React from 'react'
import './Lower.css'

const Lower=()=>{
	return(
			<div className="Lower">
				<div className="i2 ">
					<h1 className="text">Give wings to your business.</h1>
				 	<h1 className="text2">Become a WeddingsOnly vendors</h1>
				 	<h1 className="text"> and </h1> 
				 	<h1 className="text"> Kick start your business.</h1>
				</div>
				<form className="form i2">
					<h5 >Want to Register on weddings only </h5> 
					<h6 >Brand name</h6>
					<input type="text" name="brandname" />
					<h6 >Email id</h6>
					<input type="email" name="email" />
					<h6 >Contact no</h6>
					<input type="text" name="contact" />
					<h6 >Password</h6>
					<input type="password" name="password" />
					<button className="button" type="submit" >Register</button>
					<h6><input type="checkbox"/>By clicking Submit you are agreeing to the Terms and Conditions.</h6> 
				</form>
			</div>


		)
}

export default Lower;