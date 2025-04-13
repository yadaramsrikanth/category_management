import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const ProtectedRoute=({children})=>{
    const jwttoken=Cookies.get('jwttoken')
    return jwttoken?children:<Navigate to="/login" />

}

export default ProtectedRoute