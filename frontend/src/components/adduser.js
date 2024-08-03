import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Adduser() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ((e)=> {
         e.preventDefault();
         axios.post('http://localhost:8080/create',{name,email})
          .then(res => {console.log(res)
            navigate('/')
             })

          .then(err => console.log(err))
    })
  return (
    <div>
          <div className='d-flex vh-100 justify-content-center align-items-center bg-primary p-4'>
             <div className='w-50 bg-white rounded p-4'>
                <form onSubmit={handleSubmit}>
                    <h2>add users</h2>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Name</label>
                        <input type="text" className='form-control ' placeholder='Enter your name' onChange={(e) => setName((e.target.value))}/>
                    </div>
                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Email </label>
                           <input type="email" className='form-control' placeholder='Enter your email' onChange={(e)=> setEmail((e.target.value))} />
                            </div>
                    <button className='btn btn-success mt-2'>Submit</button>
                   
                </form>
             </div>
             </div>
    </div>
  )
}
