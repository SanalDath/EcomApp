import React, { useState } from 'react';
import loginIcon from '../assests/signin.gif';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import imageToBase64 from '../helpers/imageToBase64';



const Signup = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePic: '',
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

    const handleUploadPic = async (e) => {
        const file = e.target.files[0];
        
        const propic = await imageToBase64(file);

        setData((preve) => {
            return {
                ...preve,
                profilePic : propic
            }
        });
        
    }

    return (
        <section id='signup'>

            <div className='mx-auto container p-4'>
                
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto '>

                    <div className='w-20 h-20 mx-auto relative rounded-full overflow-hidden'>

                        <div className=''>
                            <img src={data.profilePic || loginIcon} alt='logo'/>
                        </div>

                        <form>
                            <label>
                                <div
                                    className={data.profilePic.length === 0 ?'text-xs bg-slate-200 bg-opacity-0 py-8 text-center absolute overflow-hidden w-full bottom-0 cursor-pointer' :'text-xs bg-slate-200 bg-opacity-70 py-8 text-center absolute overflow-hidden w-full bottom-0 cursor-pointer'}>
                                    {data.profilePic.length === 0? "Upload Profile": ''}
                                </div>
                                <div className='absolute'>
                                    <input type='file' className='hidden' onChange={handleUploadPic}/>
                                </div>
                                
                            </label>
                        </form>

                    </div>

                    <form onSubmit={handleSubmit}> 
                        <div className='grid'>
                            <label>Name : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    name='name'
                                    value={data.name}
                                    placeholder='Enter your name'
                                    className='w-full h-full outline-none bg-transparent'
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>

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

                        <div className='grid'>
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

                            <div className='grid'>
                                <label>Confirm password :</label>
                                <div className='bg-slate-100 flex p-2'>
                                    <input
                                        type={showConfirmPassword? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={data.confirmPassword}
                                        placeholder='Confirm your password'
                                        onChange={handleOnChange}
                                        className='w-full h-full outline-none bg-transparent'
                                    />
                                    <div className='cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                      <span>{showConfirmPassword? (<IoIosEye/>) : (<IoIosEyeOff/>) }</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                        <button
                            className='mt-4 bg-green-950 mx-auto block text-white px-6 py-2 max-w-[150px] rounded-full hover:scale-105 hover:transition-all'>
                            SignUp
                        </button>
                        <p
                            className='mt-4 text-sm italic'>
                            Already have an account ? 
                            <Link to='/login' className='font-bold text-red-600 hover:text-red-700 hover:underline'>
                                Login here
                            </Link>
                        </p>

                    </form>

                </div>

            </div>


        </section>
    )
};

export default Signup;
