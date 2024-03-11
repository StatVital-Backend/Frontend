import React from 'react'
import FilledButton from "../../../reuseables/bottons/FilledButton/FilledButton";
import logo from '../../../assets/VitalLogo.jpeg'
import nurse from '../../../assets/african-doctor-portrait_93675-75219.avif'
import { Link } from "react-router-dom";

const MortuaryLoginPage = () => {
  return (
    <div className="flex relative">
                <div className='mx-96 imageDiv'>
                    <img className='h-screen image' src={nurse} alt="" w-96 />
                </div>

            <div className="flex items-center px-6 py-8 loginDiv">
                
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:border-gray-700 loginForm">
                    <div className="justify-center center flex">
                        <img src={logo} alt="" />
                    </div>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight justify-center flex tracking-tight text-blue-950 md:text-3xl">
                           MORTUARY LOGIN
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-950">Your email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600
                                        focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" 
                                placeholder="name@hospital.com" 
                                required 
                            />
                        </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-blue-950">Password</label>
                                <input type="password" className="password" id="password" placeholder="••••••••" class="border text-blue-950 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:border-blue-950" required=""/>
                            </div>


                            <div>
                                <input type="radio" value="MALE" name="gender"/> Hospital
                            </div>

                            <div>
                            <input type="radio" value="FEMALE" name="gender"/> Mortuary

                            </div>
                            <div> 
                            <Link to="/layout2/registerbirth"> <FilledButton text={"Login"} style={{width:"380px"}} /> </Link>   
                            </div>
                            <p className="text-sm font-light text-blue-950">
                                Dont have an account yet? <a href="/question" className="font-medium hover:underline text-blue-400">Signup here</a>
                            </p>
                            
                            </form>
                        </div>
                </div>
            </div>

        </div>
  )
}

export default MortuaryLoginPage