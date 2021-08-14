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

     const [user, setUser] = useState({
        first_name: "",
        email_address: "",
        last_name: "",
        password: "",
        cpsw: "",
        date_of_birth: "",
        mobile_number: "",
        terms_and_condition: true
    })
    const submitForm = (e) => {
        //for submitting a post request to server API with the data that user enters

        e.preventDefault();

        fetch("http://localhost:5000/users", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.message!=null){
                    alert(data.message);
                }
                else{
                alert("User added successfully");
                setUser({
                    first_name: "",
                    last_name: "",
                    email_address: "",
                    password: "",
                    salt:"",
                    terms_and_conditions: ""
                })
            }
            })
            .catch(err => console.log(`Error : ${err}`))
    }

    return (
        <>
        
 <div className="registerTitle">
                <p>Create a New Account</p>
            </div>
            <div className="registerSignIn">
                <p>Already have an account? Please <a href="/login">sign in</a> to complete your booking.</p>
            </div>
            <form method = "post" action = "/" onSubmit={submitForm} >
            <div className="registerContainer">
                <div className = "register-inputs">
                <input type="text" name="firstName" required  placeholder="First Name" onChange={(event) => {
                    setUser({
                        ...user,
                        first_name: event.target.value
                    })}}/>
                <input type="text" name="lastName" required placeholder="Last Name" onChange={(event) => {
                    setUser({
                        ...user,
                        last_name: event.target.value
                    })
                }}/><br></br><br></br>
                <input type="email" placeholder="Enter email" name="email" required onChange={(event) => {
                    setUser({
                        ...user,
                        email_address: event.target.value
                    })
                }}/><br></br><br></br>
                <input type="password" placeholder="Enter password" name="psw" required onChange={(event) => {
                    setUser({
                        ...user,
                        password: event.target.value
                    })
                }} /><br/><br/>
        
                <input type="checkbox" id="termsCheckbox" name="termsCheckbox" value="termsCheckbox" required onChange={(event) => {
                    setUser({
                        ...user,
                        terms_and_conditions: true
                    })
                }}></input>
                <label type="terms">I have read and agreed to the <a href="#">terms and conditions.</a></label><br></br>
              
                 
                &nbsp;<button type="submit">Sign Up</button><br/><br/>
                
                <button onClick={refreshPage} type="cancel">CLEAR</button><br/><br/>
                <h5> or Sign Up using</h5><br/><br/>
               
                <div className="buttonSet">
                <a href="https://www.facebook.com/" target = "_blank"><button type="goback">Facebook</button></a> 
                
                </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default Register
