import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Header from "../Header"
import "./index.css"

const Products=()=>{
    const [categories,setCategories]=useState([])

const getproducts=async()=>{
    const jwttoken=Cookies.get('jwttoken')
    const url="https://revisit-backend-o699.onrender.com/api/categories"
    const options={
        method:"GET",
        headers:{
            Authorization:`Bearer ${jwttoken}`
        }
    }
    const response=await fetch(url,options)
   
    const data=await response.json()
    if(response.ok){
        setCategories(data)
    }
    console.log(data)
    console.log(response)

}

useEffect(()=>{
getproducts()
},[])    

    return <div className="products-container">
        <Header/>
        <h2 className="categories-heading">Categories</h2>
        <ul className="products-container-ul">
            {
                categories.map((product)=>(
                    <li key={product._id} className="list-item"> 
                        <img className="product-image" src={product.image} alt={product.categoryname}/>
                        <h1 className="product-name">{product.categoryname}</h1>
                        <p className="products-count">{product.count} items</p>
                    </li>
                ))
            }
        </ul>
    </div>
}

export default Products