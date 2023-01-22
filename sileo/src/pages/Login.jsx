import React from 'react'
import Add from "/Users/pranavkante/Documents/Sileo/Sileo---BoilerMake/sileo/src/pages/7233879.png"
const Login = () => {
    return (
        <div className = 'formContainer'>
            <div className = 'formWrapper'>
                <span className = "logo">Sileo</span>
                <span className = "title">Login</span>
                <form>
                    <input type = "text" placeholder = "display name"/>
                    <input type = "email" placeholder = "email"/>
                    <input type = "password" placeholder = "password"/>
                    <button>Log In</button>
                </form>
                <p>Register Here Boilermakers!</p>
            </div>
        </div>
    )
}

export default Login