import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
   
<div className="footertab">
<br></br>
<br></br>
  <div className="row">
    	<div className="col-md-12">
    	    <footer className="footer">				
		<div className="footertab">
			<div className="row">
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Watch
					</div>	
					<div className="footer-links">
						<a href="/">
							Spotlight
						</a>
						<a href="#">
							Movies
						</a>
						<a href="#">
							TV
						</a>
						<a href="#">
							Free
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						My Account
					</div>	
					<div className="footer-links">
						<a href="/">
							My Moviezz
						</a>
						<a href="#">
							Account
						</a>
						<a href="#">
							Settings
						</a>
						<a href="#">
							Manage Devices
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Features
					</div>	
					<div className="footer-links">
						<a href="#">
                        Movies and Anywhere
						</a>
						<a href="#">
                            Family
						</a>
						<a href="#">
                            Links
						</a>
						<a href="#">
							Privacy policy
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Help
					</div>	
					<div className="footer-links">
						<a href="#">
							About Us
						</a>
						<a href="/login">
							Login
						</a>
						<a href="#">
							Jobs
						</a>
						<a href="#">
							Support forum
						</a>
					</div>

					<div className="footer-social-links m-t-30">
						<li>
							<a href="https://www.facebook.com/" target = "_blank">
								<i className="fa fa-facebook" aria-hidden="true"></i>
                                <FaFacebookSquare/>
							</a>
							<a href="https://twitter.com/?lang=en" target = "_blank">
								<i className="fa fa-twitter" aria-hidden="true"></i>
                                <ImTwitter/>
							</a>
							<a href="https://www.linkedin.com/" target = "_blank">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
                                <AiFillLinkedin/> 
							</a>
							<a href="https://www.youtube.com/" target = "_blank">
								<i className ="fa fa-youtube" aria-hidden="true"></i>
                                <FaYoutube/>
							</a>
						</li>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<div class="footer-bottom">
		Copyright © 2021, All Rights Reserved
	</div>
    	</div>
	</div>
</div>
       
        
    )
}

export default Footer
