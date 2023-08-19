import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const navigate = useNavigate();
    const{id} = useParams();

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        status:"active"
    })

    const{firstName, lastName, status} = user;

    const onInputChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(result.data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`,user);
        navigate('/')
    }

  return (
    <div className='flex justify-center items-center h-screen'>
    <div>
        <h2 className='text-center my-4'>
            Create Contact Screen
        </h2>
        <div >
            <form onSubmit={handleSubmit}>
                <div className='border-2 border-black px-7 py-2 mb-3'>
                    <div className='my-4'>
                        First Name:
                        <input type="text"
                            value={firstName}
                            onChange={(e) => onInputChange(e)}
                            name='firstName'
                            className=' border-2 border-black ms-2 p-1'
                        />
                    </div>
                    <div className='my-4'>
                        Last Name:
                        <input type="text"
                            value={lastName}
                            onChange={(e) => onInputChange(e)}
                            name='lastName'
                            className=' border-2 border-black ms-2 p-1'
                        />
                    </div>
                    <div className='flex'>
                        Status:
                        <div className='ms-10'>
                            <label>
                                <input
                                    type="radio"
                                    value="active"
                                    checked={status === 'active'}
                                    // onChange={() => setUser.status('active')}
                                    className='me-2'
                                />
                                Active
                            </label>
                        </div>
                        <div className='ms-8'>
                            <label>
                                <input
                                    type="radio"
                                    value="inactive"
                                    checked={status === 'inactive'}
                                    // onChange={() => setUser.status('inactive')}
                                    className='me-2'
                                />
                                Inactive
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex  justify-center'>
                    <button type='submit' className='bg-red-400 w-1/2 mx-auto py-2 mt-1'>
                        Save Contact
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default EditUser