import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users, setUser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/')
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = async(id) =>{
        try{
            await axios.delete('http://localhost:8080/delete/'+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
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
                    {
                        users.map((user,id)=>(
                            <tr key={id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='d-flex gap-2'>
                                    <Link to={`update/${user.id}`} className='btn btn-primary'>Update</Link>
                                    <button onClick={e=>handleDelete(user.id)} className='btn btn-danger'>Delete</button>
                                    <Link className='btn btn-secondary' to={`user/${user.id}`}>Details</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}