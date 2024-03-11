import React, { useState } from 'react';
import hospitalLogo from '../../../assets/Untitled(4).jpg';
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
import { useForm } from "react-hook-form"

import { Link } from 'react-router-dom';


const HospitalSignUpForm = ({ title }) => {
    const { register, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    const [facilityName, setFacilityName] = useState('');
    const [facilityLocation, setFacilityLocation] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrMsg('');
    };

    return (
        <div className=" h-screen bg-blue-950" >  
        <div className='flex'>    
        <div className="flex h-screen">
            <div className="bg-white rounded-sm p-6 text-center">
             <img src={hospitalLogo} alt="Hospital Logo" className="mb-5 mx-auto" />
                <h2 className="text-4xl font-bold text-blue-950 text-center mb-8">HOSPITAL SIGN UP</h2>
                    <div>
                        <div className='flex gap-5 ml-44 text-2xl pb-10'>
                            <div>
                                <h1>Signup as</h1>
                            </div>

                            <div className=''>
                                <input type="radio" name="hospital" id=""
                                {...register("signup", { required: 'signup is required' })}
                                />Hospital
                            </div>

                            <div>
                                <input type="radio" name="mortuary" id="" 
                                {...register("signup", { required: 'signup is required' })}
                                />Mortuary
                            </div>
                        </div>

                    </div>


                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">

                    <div>

                        <label htmlFor="facilityName" className="block text-blue-950 font mb-2 text-2xl">Facility Name</label>
                        <input
                            type="text"
                            id="facilityName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Facility Name"
                            required
                            value={facilityName}
                            onChange={(e) => setFacilityName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="facilityLocation" className="block text-blue-950 font mb-2 text-2xl">Facility Location</label>
                        <input
                            type="text"
                            id="facilityLocation"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Facility Location"
                            required
                            value={facilityLocation}
                            onChange={(e) => setFacilityLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="facilityType" className="block text-blue-950 font mb-2 text-2xl">Facility Type</label>
                        <select
                            id="facilityType"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            value={facilityType}
                            onChange={(e) => setFacilityType(e.target.value)}
                            required
                        >
                            <option value="">Select Facility Type</option>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="certificationNumber" className="block text-blue-950 font mb-2 text-2xl">Certification Number</label>
                        <input
                            type="text"
                            id="certificationNumber"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Certification Number"
                            required
                            value={certificationNumber}
                            onChange={(e) => setCertificationNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="officialEmail" className="block text-blue-950 font mb-2 text-2xl">Official Email</label>
                        <input
                            type="email"
                            id="officialEmail"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Official Email"
                            required
                            value={officialEmail}
                            onChange={(e) => setOfficialEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-blue-950 font mb-2 text-2xl">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Phone Number"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-blue-950 font mb-2 text-2xl">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-blue-950 font mb-2 text-2xl">Confirm Password</label>
                        <input
                            type="confirmPassword"
                            id="confirmPassword"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Re-enter Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <p className="text-red-500">{errMsg}</p>
                    <div className="flex items-center justify-between">
                      <Link to="/hospitallogin"><FilledButton text="Sign Up" style= {{width: "120px"}}/> </Link>  
                        <div className="text-sm">
                            <p className="mb-4">Already have an account?</p>
                            <p className="underline cursor-pointer">Sign in</p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <div className='content px-32 pt-80'>
            <h1 className='text-white text-5xl'>
            Navigate Life's Journey with
             Precision - <br /> Capturing Every Moment, 
              Every Statistic, Every Insight!</h1>
              <p className='text-white pt-10 text-2xl'> We are a team of passionate individuals who believe in the power of data and its impact on society. <br />
            Committed to providing the best tools and resources, we empower you to capture and analyze <br /> 
            your life's journey. By encapsulating every moment, statistic, and insight, we enable informed <br />
            decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, <br /> 
            eagerly anticipating our role in your story.</p>
        </div>
        </div>  
        </div>
    );
};

export default HospitalSignUpForm;
