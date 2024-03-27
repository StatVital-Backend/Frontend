import React from 'react'
import FilledButton from "../../../reuseables/bottons/FilledButton/FilledButton";
import logo from '../../../assets/VitalLogo.jpeg'
import nurse from '../../../assets/african-doctor-portrait_93675-75219.avif'
import {useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton';

const MortuaryLoginPage = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('')
   
      useEffect (()=> {
      setErrMsg('')
    }, [email, password]);

  
    const handleSubmit = async (e) =>{
      e.preventDefault();

      const obj = {
        email: email,
        password: password
      }

      try {
        const response = await fetch("https://tops-chimp-promoted.ngrok-free.app/api/v2/Log-In-Morgue", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });        
        if (response.ok) {
            const data = await response.json();
                console.log(data);
                setSuccessMsg(data.message);
                setTimeout(()=> {
                    setSuccessMsg('')
                }, 3000);
                navigate("/morguelayout/morguereg/Adddeceased")
            }
        
        } catch (error) {
            console.error('Error:', error);
            setErrMsg("Incorrect Password");
        }
    }

  return (
    <div className="flex flex-row justify-around">
                <div className=' imageDiv'>
                    <img className='h-screen hidden sm:block' src={nurse} alt="" w-96 />
                </div>

            <div className="flex items-center px-6 py-8 loginDiv">
                
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:border-gray-700 loginForm">
                    <div className="justify-center center flex">
                        <img src={logo} alt="" />
                    </div>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-2xl font-bold leading-tight justify-center flex tracking-tight text-blue-950 md:text-3xl">
                           MORGUE LOGIN
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-2xl font-medium text-blue-950">Your email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="border text-blue-950 text-2xl rounded-lg focus:ring-primary-600
                                            focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 focus:ring-blue-950 focus:border-blue-950" 
                                    placeholder="name@morgue.com" 
                                    required 
                                />
                            </div>

                        
                            <div>
                                <label htmlFor="password" className="block mb-2 text-2xl font-medium text-blue-950">Password</label>
                                <input type="password" id="password" placeholder="••••••••" className="border text-blue-950 text-2xl rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 focus:border-blue-950" required=""/>
                            </div>


                                
                            <div className='pt-8 grid items-center justify-center'> 
                            <FilledButton text={"Login"} style={{width:"280px"}} />
                            <p className="flex flex-row gap-4 pt-5 justify-center text-blue-950">
                                Need an Account? <br/>    
                                <span className='line'>
                                <Link to="/mortuarysignup"><GhostButton text="Sign up"/> </Link> 
                                </span>
                            </p>
                            </div>
                                {successMsg && (
                                    <p className="text-green-500 text-3xl justify-center center flex ">{successMsg}</p>
                                )}
                        </form>                            
                    </div>
                </div>
            </div>

        </div>
  )
}

export default MortuaryLoginPage