import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import API_BASE from '../config';
const UpdateProduct=()=>{
    const [name,setName]=useState("");
    const [brand,setBrand]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const params = useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async ()=>{
        let result = await fetch(`${API_BASE}/products/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setBrand(result.brand);
    }

    const updateProduct= async ()=>{
        let result = fetch(`${API_BASE}/products/${params.id}`,{
            method: 'PUT',
            body:JSON.stringify({name, brand, category, price}),
            headers:{
                'Content-Type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = (await result).json();
        navigate('/');
    }

    return(
        <div className="product">
            <h1>Update Product</h1>
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
            <button className='addbutton' onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;