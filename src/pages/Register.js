import React from 'react'
import {Link} from "react-router-dom";
import { useState, useContext } from 'react';
import moviezzContext from '../context/moviezzContext';


const Register = () => {
    const refreshPage = ()=>{
        window.location.reload();
     }
    const { setHeaderButtonText, setHeaderButtonLink } = useContext(moviezzContext);
     setHeaderButtonText("Sign In");
     setHeaderButtonLink("/login");
    return (
        <>
 <div className="registerTitle">
                <p>Create a New Account</p>
            </div>
            <div className="registerSignIn">
                <p>Already have an account? Please <a href="/login">sign in</a> to complete your booking.</p>
            </div>
            <div className="registerContainer">
                <div className = "register-inputs">
                <input type="text" name="firstName" required  placeholder="First Name"/>
                <input type="text" name="lastName" required placeholder="Last Name"/><br></br><br></br>
                <input type="email" placeholder="Enter email" name="email" required /><br></br><br></br>
                <input type="password" placeholder="Enter password" name="psw" required /><br/><br/>
        
                <input type="checkbox" id="termsCheckbox" name="termsCheckbox" value="termsCheckbox" required></input>
                <label type="terms">I have read and agreed to the <a href="#">terms and conditions.</a></label><br></br>
              
                <Link to= "/usermyaccount">  
                &nbsp;<button type="submit">Sign Up</button><br/><br/>
                </Link>
                <button onClick={refreshPage} type="cancel">CLEAR</button><br/><br/>
                <h5> or Sign Up using</h5><br/><br/>
                <Link to= "/">  
                &nbsp;<button className="buttonextra" type="submit">Walmart</button>
                </Link>
                <Link to= "/">  
                &nbsp;<button className="buttonextra"  type="submit">Facebook</button><br/><br/><br/>
                </Link>
                </div>
            </div>
        </>
    )
}

export default Register
