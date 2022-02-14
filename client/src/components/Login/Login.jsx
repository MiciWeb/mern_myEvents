import React from 'react'

const Login = () => {

    const google = () => {
        window.open("http://localhost:4000/auth/google", "_self")
    }
    const github = () => {
        window.open("http://localhost:4000/auth/github", "_self");
    };

    return (
        <div>
            <button className="login-btn" onClick={google}>
                Google
            </button>
            <button className="login-btn" onClick={github}>
                Github
            </button>
        </div>
    )
}

export default Login