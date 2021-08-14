import React,{useContext} from 'react'
import moviezzContext from '../context/moviezzContext';
import {Link} from 'react-router-dom'

const Login = () => {
    const refreshPage = () => {
        window.location.reload();
    }
    const { setHeaderButtonText, setHeaderButtonLink } = useContext(moviezzContext);
    setHeaderButtonText("Sign up");
    setHeaderButtonLink("/register");
    return (
        <>
            <br></br>
            <br></br>
            <form method = "post" action = "/" >
            <div className="loginContainer">
                <label for="email">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" placeholder="Enter Email" name="email" required /><br/><br/>

                <label for="psw">Password:</label>
                <input type="password" placeholder="Enter Password" name="psw" required /><br></br>
              
                <Link to="/">
                <button type="submit">LOGIN</button><br></br>
                </Link>
                
                    <br/><br/>
                <div className="loginCreateAccount">
                <p>    Don't have an account yet? Please <a href="/register">sign up</a> to create an account.</p>
                </div>
            </div>
            </form>
        </>
      
    )
}

export default Login
