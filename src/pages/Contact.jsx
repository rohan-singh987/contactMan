import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get("https://contactdataaaaa.onrender.com/users");
        setUsers(result.data)
    }

    const deleteContact = async(id) => {
        await axios.delete(`https://contactdataaaaa.onrender.com/users/${id}`)
        loadUser();
    } 

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <div className='flex justify-center sticky bg-white top-0'>
                    <div className='text-center  bg-green-300  rounded-md p-5 my-10 '>
                        <Link to={'/createContact'}>
                            Create Contact
                        </Link>
                    </div>
                </div>
                <div className=' grid md:grid-cols-3 md:gap-8 grid-cols-2 sm:gap-3 overflow-scroll  '>
                    {
                        users.map((user, index) => {
                            return (
                                <div key={index} className=' overflow-scroll mb-5 ' >
                                    <div className=' border-2 md:w-64 h-44 sm:w-56 w-40 mx-2 flex flex-col justify-center'>
                                        <div className='flex flex-col  mx-auto items-center justify-center'>
                                            <div className='font-bold'>
                                                First Name:
                                                <span className=' underline font-normal ms-3'>
                                                    {user.firstName}
                                                </span>
                                            </div>
                                            <div className='font-bold'>
                                                Last Name:
                                                <span className=' underline font-normal ms-3'>
                                                    {user.lastName}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='flex font-bold mx-auto items-center justify-center'>
                                            Status:
                                            <span className=' underline font-normal ms-3'>
                                                {user.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center text-center '>
                                        <Link to={`/editContact/${user.id}`} className=' bg-green-300 w-1/2 mx-auto rounded-md p-1 my-2'>
                                            <button >
                                                Edit
                                            </button>
                                        </Link>
                                        <button className=' bg-red-400 w-1/2 mx-auto rounded-md p-1 mt-1' 
                                            onClick={() => {deleteContact(user.id)}}    
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact