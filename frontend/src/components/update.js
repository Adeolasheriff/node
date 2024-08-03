import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    const handleUpdate = ((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/update/${id}`,{name,email})
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .then(err=>console.log(err))
    })
  return (
    <div>
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-4'>
           <form onSubmit={handleUpdate}>
                <h2>Update User</h2>
                <div className='mt-2'>
                    <label className='mb-2'>Name</label>
                    <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
                </div>
                <div className='mt-3'>
                    <label className='mb-2'>Email</label>
                    <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your E-mail'/>
                </div>
                <button className='btn btn-success mt-2'>Update</button>
           </form>
        </div>
      </div>
    </div>
  )
}