import React, { useState } from 'react';
import loginIcon from '../assests/signin.gif';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";



const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <section id='login'>

            <div className='mx-auto container p-4'>
                
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>

                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcon} alt='logo'/>
                    </div>

                    <form onSubmit={handleSubmit}> 

                        <div className='grid'>
                            <label>Email : </label>
                            <div className='p-2 bg-slate-100'>
                                <input
                                    type='email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    placeholder='Enter your email'
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className=''>
                            <label>Password : </label>
                            <div className='p-2 bg-slate-100 flex'>
                                <input
                                    type={showPassword ? "password" : "text"}
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    placeholder='Enter your Password'
                                    className='w-full h-full outline-none bg-transparent' />
                                    <div className='cursor-pointer ' onClick={ () => setShowPassword(!showPassword)}>
                                    <span>{ showPassword ? ( <IoIosEyeOff/> ) : (<IoIosEye/>) }</span>
                                    </div>
                            </div>
                            <Link
                                to='/forgot-password'
                                className='text-sm block w-fit ml-auto pt-2 hover:underline hover:text-red-700'>
                                Forgotten password
                            </Link>
                           
                        </div>

                        <button
                            className='bg-green-950 mx-auto block text-white px-6 py-2 max-w-[150px] rounded-full hover:scale-105 hover:transition-all'>
                            Login
                        </button>
                        <p
                            className='text-sm italic'>
                            Dont have account ? 
                            <Link to='/signup' className='font-bold text-red-600 hover:text-red-700 hover:underline'>
                                Sign-Up
                            </Link>
                        </p>

                    </form>

                </div>

            </div>


        </section>
    )
};

export default Login;
