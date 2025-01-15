import React, { useState, useEffect } from 'react'
import styles from "./index.module.scss"
import axios from "axios"
import {BASE_URL} from "../../constants/script"
import {Helmet} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const nav = useNavigate()

    const getProducts = async() =>{
        const res = await axios(`${BASE_URL}/api/products`)
        console.log(res.data.data);
        setProducts(res.data.data)
    }

    const filteredProducts = products.filter((w)=> w.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

    useEffect(() => {
      getProducts()
    
    }, [])
    

  return (
    <>
    <Helmet>
      <title>Products</title>
    </Helmet>
    <div className={styles["container"]}>
        
    <hr />
    <h2>Featured Products</h2>
    <input type="text" placeholder='Search' onChange={(e)=> {setSearchQuery(e.target.value)}}/>
    <div className={styles["products"]}>
        
    {
        products.length > 0 && filteredProducts.map((w)=>{
            return (

                <div className={styles["product"]} key={w._id} onClick={()=>{nav(`../details/${w._id}`)}}>
                    <img src={w.imageUrl} alt="" />
                    <h3>{w.title}</h3>
                    <p className={styles['desc']}>{w.description}</p>
                    <p>${w.price}</p>
                </div>
            )

        })
    }



    </div>

    </div>
    </>
  )
}

export default Products