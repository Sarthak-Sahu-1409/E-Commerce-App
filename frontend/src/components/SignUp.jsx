import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    },[])

    const collectData=async ()=>{
        console.warn(name,email,password);
        let result = await  fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        //console.log(result);
        if(result.auth)
        {
            localStorage.setItem("user",JSON.stringify(result.result));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate('/');
        }
    }

    return(
        <div className='input'>
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button type="button" className='appbutton' onClick={collectData}>SignUp</button>
        </div>
    )
}

export default SignUp;