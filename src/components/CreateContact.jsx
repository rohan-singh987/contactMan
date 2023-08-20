import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('active');

    // const [user, setUser] = useState({
    //     firstName:"",
    //     lastName:"",
    //     status:"active"
    // })

    // const{firstName, lastName, status} = user;

    // const onInputChange = (e) => {
    //     setUser({
    //         ...user, [e.target.name]: e.target.value
    //     })
    // }

    const user = {
        firstName,
        lastName,
        status
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/users',user);
            navigate('/')
        } catch (error){
            console.error(error);
        }
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
                                    onChange={(e) => setFirstName(e.target.value)}
                                    name='firstName'
                                    className=' border-2 border-black ms-2 p-1'
                                />
                            </div>
                            <div className='my-4'>
                                Last Name:
                                <input type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
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
                                            onChange={() => setStatus('active')}
                                            className='me-2'
                                            name='active'
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
                                            onChange={() => setStatus('inactive')}
                                            className='me-2'
                                            name='inactive'
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

export default CreateContact