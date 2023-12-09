import React, { useEffect, useState } from "react";
import"./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import ProductCard from "../../components/ProductCard/ProductCard";
 function Home(){
const [products,setProducts] =useState([]);

const loadproduct =async ()=>{
    try{
    const response =await axios.get("/products");
    setProducts(response?.data?.data);
    }
catch (err){
    console.log(err);
    alert("Error loading product");
}

};

useEffect(()=>{
loadproduct();
},[])
    return(
        <div>
        <Navbar/>
       <div className="products-container">
       {
           products?.map ((product,index) =>{
            
         const { _id,name,description,price,image} = product;

            return(<ProductCard 
                key={index} 
                name={name}
                description={description}
                price={price}
                image={image}
                id={_id}
               
            />)
              
           }) 
        }
       </div>
        </div>
    )
 }
 export default Home