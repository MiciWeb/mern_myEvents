import React from 'react'
import Google from "../../image/google.png";
import Github from "../../image/github.png";

import "./Login.css"
const Login = () => {

    const google = () => {
        window.open("http://localhost:4000/auth/google", "_self")
    }
    const github = () => {
        window.open("http://localhost:4000/auth/github", "_self");
    };

    return (
        <div className="login">
            <div className="wrapper">
                <div className="loginButton google" onClick={google}>
                    <img src={Google} alt="" className="icon" />
            Google
          </div>
                <div className="loginButton github" onClick={github}>
                    <img src={Github} alt="" className="icon" />
            Github
          </div>
            </div>
        </div>
    )
}

export default Login