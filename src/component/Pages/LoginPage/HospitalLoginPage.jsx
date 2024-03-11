import React from "react";
import { useForm } from "react-hook-form"

import FilledButton from "../../../reuseables/bottons/FilledButton/FilledButton";
import logo from '../../../assets/VitalLogo.jpeg'
import nurse from '../../../assets/african-doctor-portrait_93675-75219.avif'
import { Link } from "react-router-dom";


const HospitalLoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    const loginAs = watch('loginAs')
    console.log(loginAs)

    

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex relative">
                <div className='mx-96 imageDiv'>
                    <img className='h-screen image' src={nurse} alt="" />
                </div>

            <div className="flex items-center px-6 py-8 loginDiv">
                
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:border-gray-700 loginForm">
                    <div className="justify-center center flex">
                        <img src={logo} alt="" />
                    </div>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight justify-center flex tracking-tight text-blue-950 md:text-3xl">
                           HOSPITAL LOGIN
                        </h1>
                        <div className="space-y-4 md:space-y-6" action="#">

                        <div className="flex gap-5">
                            <div>
                                <p>LOGIN AS</p>
                            </div>

                            <div>
                            <div className="flex gap-5">
                            <input 
                                type="radio" 
                                value="hospital" 
                                {...register("loginAs", { required: 'login as is required' })}
                            /> Hospital
                            </div>
                                {errors.hospitalEmail && <span className="text-red-400 text-sm">{errors.hospitalEmail.message}</span>}
                            </div>

                            <div>
                                <div>
                                <input 
                                type="radio" 
                                value="mortuary" 
                            /> Mortuary
                            </div>
                            </div>

                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-950">Your email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600
                                        focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" 
                                placeholder="name@hospital.com" 
                                {...register("hospitalEmail", { required: 'hospital is required'})}
                            />
                                {errors.hospitalEmail && <span className="text-red-400 text-sm">{errors.hospitalEmail.message}</span>}
                        </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-950">Password</label>
                                <input type="password" id="password" placeholder="••••••••" className="border text-blue-950 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:border-blue-950" 
                                {...register("password", { required: 'password is required' })}
                            />
                                {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
                                </div>
                                <a href="#" className="text-xs text-blue-400">Forget Password?</a>
                            <div> 
                         <Link to="/birthlayout/registerbirth"><FilledButton text={"Login"} style={{width:"380px"}} />   </Link>   
                            </div>
                            <p className="text-sm font-light text-blue-950">
                                Dont have an account yet? <a href="/deathLayout/registerDeath" className="font-medium hover:underline text-blue-400">Signup here</a>
                            </p>
                            
                            </div>
                        </div>
                </div>
            </div>

        </div>
        </form>
    </section>
    )
};

export default HospitalLoginPage;
