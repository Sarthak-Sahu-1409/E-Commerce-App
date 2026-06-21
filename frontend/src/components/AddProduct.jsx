import React, { useState } from "react";
import API_BASE from '../config';

const AddProduct=()=>{
    const [name,setName]=useState("");
    const [brand,setBrand]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const addProduct= async ()=>{
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch (`${API_BASE}/add-product`,{
            method:'POST',
            body:JSON.stringify({name,price,category,brand,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });  
        result = await result.json();
        console.warn(result);
    }

    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter Product Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input type="text" placeholder='Enter Product Brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            />
            <input type="text" placeholder='Enter Product Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <input type="text" placeholder='Enter Product Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
            <button className='addbutton' onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;