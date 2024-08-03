import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Detail() {
    const [user, setUser] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios.get('http://localhost:8080/user/' + id)
        .then(res => {
       console.log(res)
    })   
        .catch(err => console.log(err))
    },[])

    
  return (
    <div>
      <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded'>
            <Link to={'/adduser'} className='btn btn-success m-4'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> 
           <tr>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>
      <Link to={`update/${user.id}`} className='btn btn-primary'>Update</Link>
      <Link to={'/'} className='btn btn-danger'>home</Link>
           </td>
           </tr>
 </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}