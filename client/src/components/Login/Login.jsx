import React from 'react'

const Login = () => {

    const google = () => {
        window.open("/auth/google", "_self")
    }
    const github = () => {
        window.open("/auth/github", "_self");
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