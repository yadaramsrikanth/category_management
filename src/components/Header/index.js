import { useContext } from "react"
import Context from "../../Context"
import Cookies from "js-cookie"
import "./index.css"
import { useNavigate } from "react-router-dom"

const Header=()=>{
    const navigate=useNavigate()
    const {username}=useContext(Context)
    const user=username?username.split("@")[0]:"user"
    const firstletter=user[0].toUpperCase()

    console.log(user)

const onclicktologout=()=>{
    Cookies.remove('jwttoken')
    navigate("/login")
}

    return <nav className="nav-bar">
        <h3 className="cart-name">fastCart</h3>
        <div className="logout-button-name-contaier">
        <button onClick={onclicktologout} className="logout-button" type="submit">Logout</button>
       <p className="user-name"><span>{firstletter}</span>{user}</p>
        </div>
    </nav>
}

export default Header