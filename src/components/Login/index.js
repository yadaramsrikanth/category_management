import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Cookies from "js-cookie"

import "./index.css"
import Context from "../../Context"
const Login=()=>{
const [email,setEmail]=useState("")
const [password,setpassword]=useState("")
const [error,seterror]=useState('')
const {changUsername}=useContext(Context)
const navigate=useNavigate()
const jwttoken=Cookies.get('jwttoken')


const onclicktosetemail=(e)=>{
    setEmail(e.target.value)
    changUsername(e.target.value)
}



const onclicktologin=async(event)=>{
    event.preventDefault()
    const userdetails={email,password}
    const url="https://revisit-backend-o699.onrender.com/api/auth/login"
    const options={
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(userdetails)
    }
    const response= await fetch(url,options)
    console.log(response)
    const data=await response.json()
    if(response.ok){
        
        seterror(data.message)
        Cookies.set('jwttoken',data.jwttoken,{expires:30})
        navigate("/")

    }else{
        seterror(data.message)
    }
    setEmail("")
    setpassword("")
}

if(jwttoken!==undefined){
    return <Navigate to="/"/>
}

return <form className="login-form" onSubmit={onclicktologin}>
    <div className="login-form-elements-container">
        <h1 className="login-page-heading">Let's get you signed in</h1>
        <label htmlFor="login-email" className="label-element">Email</label>
        <input className="input-element" value={email} id="login-email" type="email" onChange={onclicktosetemail} required placeholder="Enter Email.."/>
    <label className="label-element" htmlFor="login-password">Password</label>
    <input className="input-element" id="login-password" value={password}  type="password" onChange={(e)=>setpassword(e.target.value)} required placeholder="Enter Password.."/>
    <button type="submit" className="login-button">Login</button>
    {error !=="" && <p className="error-msg">{error}</p>}
    <p className="login-redirect">Don't have an account?<Link className="link-element" to="/register">Register</Link></p>
    </div>
</form>
}

export default Login