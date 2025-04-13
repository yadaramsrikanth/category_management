import {Link, Navigate, useNavigate} from "react-router-dom"
import {useState} from "react"
import Cookies from "js-cookie"
import "./index.css"

const Register=()=>{
    const [username,setUsername]=useState("")
    const [email,setemail]=useState("")
    const [password,setPassword]=useState('')
    const [error,setError]=useState("")
    const navigate=useNavigate()
    const jwttoken=Cookies.get('jwttoken')

    const onclicktoregister=async(event)=>{
        event.preventDefault()
        const userdetails={username,email,password}
        const url="https://revisit-backend-o699.onrender.com/api/auth/signup"
        const options={
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userdetails)
        }
        const response=await fetch(url,options)
        
        const data=await response.json()
        if(response.ok){
            setError(data.message)
            navigate("/login")
        }else{
            setError(data.message)
        }
        setUsername("")
        setemail("")
        setPassword("")
    }

if (jwttoken!==undefined){
    return <Navigate to="/"/>
}

    return <form className="register-form" onSubmit={onclicktoregister}>
       
        <div className="register-form-details">
        <h1 className="register-heading">Welcome! Let's Get You Started</h1>
        <label htmlFor="username">USERNAME</label>
        <input placeholder="Enter user name.." id="username" value={username} type="text" required onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="email">E-MAIL</label>
        <input placeholder="Enter email.." id="email" type="email" value={email} required onChange={(e)=>setemail(e.target.value)}/>
        <label htmlFor="password">PASSWORD</label>
        <input placeholder="Enter password.." id="password" type="password" value={password} required onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" className="register-button">Register</button>
        {error!==""?<p className="error-msg">{error}</p>:null}
        <p className="login-redirect">Already have an Account?<Link to="/login" className="link-element">Login</Link></p>
        </div>
         </form>
}

export default Register