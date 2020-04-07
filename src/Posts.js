import React from 'react'
import './Posts.css'
import register from './register.svg'
import fee from './fee.svg'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'

const Posts=()=>{
	return(
		<div class="container">
		  <div class="row">
		    <div class="col-lg-4">
		      <div className="posts">
				<div class="card" style={{width:"18rem"}}>
				<img class="card-img-top" style={{width:"5rem"}}  src={pic1} alt="Card image cap"/>
	  			<div class="card-body">
	    		<h5 class="card-title">Card title</h5>
	    		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	  		</div>
			</div>
			</div>
		    </div>
		    <div class="col-lg-4">
		    		<div className="posts">
		<div class="card" style={{width:"18rem"}}>
			<img style={{width:"5rem"}}  class="card-img-top" src={pic2} alt="Card image cap"/>
	  	<div class="card-body">
	    	<h5 class="card-title">Card title</h5>
	    	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    	
	  	</div>
		</div>
		</div>
		    </div>
		    <div class="col-lg-4">
		   				<div className="posts">
		<div class="card" style={{width:"18rem"}}>
			<img style={{width:"5rem"}} class="card-img-top" src={pic3} alt="Card image cap"/>
	  	<div class="card-body">
	    	<h5 class="card-title">Card title</h5>
	    	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    	
	  	</div>
		</div>
		</div>
		    </div>
		  </div>




		<h1 className="header2"> Why Weddings only </h1>
	  	<div class="row">
    		<div class="col-lg-6">
                <h5> <img className="fee"  src={fee}/>No listing fees </h5>
      			<p>Lorem Ipsum ajkdaskjdkalkjadaskdbaskjnkjasb
      			nkjasbsakbfskjfbvhhjsdkfhbvhjfsfvhshjbfhjsdfsfsdf</p>
    		</div>
    		<div class="col-lg-6">
      			<h5> <img className="fee"  src={fee}/> No listing fees </h5>
      			<p>Lorem Ipsum ajkdaskjdkalkjadaskdbaskjnkjas
      			bnkjasbsakbfskjfbvhhjsdkfhbvhjfsfvhshjbfhjsdfsfsdf</p>
    		</div>
    		<div class="col-lg-6">
                <h5> <img className="fee"  src={fee}/>No listing fees </h5>
      			<p>Lorem Ipsum ajkdaskjdkalkjadaskdbaskjnkjasb
      			nkjasbsakbfskjfbvhhjsdkfhbvhjfsfvhshjbfhjsdfsfsdf</p>
    		</div>
    		<div class="col-lg-6">
                
      			<h5> <img className="fee"  src={fee}/> No listing fees </h5>
      			<p>Lorem Ipsum ajkdaskjdkalkjadaskdbaskjnkjasb
      			nkjasbsakbfskjfbvhhjsdkfhbvhjfsfvhshjbfhjsdfsfsdf</p>
    		</div>
	  	</div>



	  	<h1 className="header3">How it is simple to do business on WeddingsOnly </h1>
	  	<div class="row">
    		<div class="col-lg-4">
    		</div>
    		<div class="col-lg-4">
    			<img className="dot" src={register}/>
                <div className="vertical">
                </div>
    		</div>
    		<div class="col-lg-4">
    			<h5>Step 1: Register yourself and List your products</h5>
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    			sed do eiusmod tempor incididunt ut labore et dolore magna 
    			aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    			ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    			Duis aute irure dolor in reprehenderit in voluptate velit esse 
    			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    			cupidatat non proident, sunt in culpa qui officia deserunt 
    			mollit anim id est laborum.
    			</p>
    		</div>
    		<div class="col-lg-4">
    			<h5>Step 1: Register yourself and List your products</h5>
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    			sed do eiusmod tempor incididunt ut labore et dolore magna 
    			aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    			ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    			Duis aute irure dolor in reprehenderit in voluptate velit esse 
    			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    			cupidatat non proident, sunt in culpa qui officia deserunt 
    			mollit ani id est laborum.
    			</p>
    		</div>
    		<div class="col-lg-4">
    			<img className="dot" src={register}/>
                <div className="vertical">
                </div>
    		</div>
    		<div class="col-lg-4">
    		</div>
			<div class="col-lg-4">
    		</div>
    		<div class="col-lg-4">
    			<img className="dot"  src={register}/>
                <div className="vertical">
                </div>
    		</div>

    		<div class="col-lg-4">
    			<h5>Step 1: Register yourself and List your products</h5>
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    			sed do eiusmod tempor incididunt ut labore et dolore magna 
    			aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    			ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    			Duis aute irure dolor in reprehenderit in voluptate velit esse 
    			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    			cupidatat non proident, sunt in culpa qui officia deserunt 
    			mollit anim id est laborum.
    			</p>
    		</div>
	  	</div>




	</div>

		
	
	)
}

export default Posts;