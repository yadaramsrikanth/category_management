import {Route,Routes} from "react-router-dom"

import Register from "./components/Register"
import Login from "./components/Login"
import Products from "./components/Products"
import ProtectedRoute from "./components/ProtectedRoute"
import Context from "./Context"
import { useState } from "react"
const App=()=>{
  const [user,setUser]=useState("")
  
const changUsername=(username)=>{
  setUser(username)
}

  return (
  <Context.Provider value={{username:user,changUsername}}>
  <Routes>
    <Route path="/" element={<ProtectedRoute><Products/></ProtectedRoute>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
  </Context.Provider>
  )
}

export default App