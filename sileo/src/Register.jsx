import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState ('');
    const [username, setUsername] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "authform-container">
            <h2>Register</h2>
            <form className = "register-form" onSubmit = {handleSubmit}>
                <label htmlFor = "username">Username</label>
                <input value = {username} username = "username" id = "username" placeholder= "username" />
                <label htmlFor = "email">email</label>
                <input  value = {email}  onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "youremail@purdue.edu"  id = "email" name = "email" />
                <label htmlFor = "password">password</label>
                <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder = "******"  id = "password" name = "password" />
                <button type = "submit">Sign up</button>
            </form>
            <button className = "link-btn" onClick = {() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}