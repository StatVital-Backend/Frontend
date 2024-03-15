import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import FilledButton from '../../../../reuseables/bottons/FilledButton/FilledButton';

const RegisterChildbirth = ({ title }) => {
    const { register, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    

    const [nurseName, setNurseName] = useState('');
    const [fatherFullName, setFatherFullName] = useState('');
    const [motherFullName, setMotherFullName] = useState('');
    const [childFullName, setChildFullName] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [gender, setGender] = useState('')

    const [errMsg, setErrMsg] = useState('');

    console.log(childFullName)
    console.log(stateOfOrigin)

    const handleSubmit = (e) => {
        e.preventDefault()    

        const RegisterChildBirth = {
            nurseName: nurseName,
            fatherFullName: fatherFullName,
            motherFullName:motherFullName,
            childFUllName: childFullName,
            stateOfOrigin: stateOfOrigin,
            sex: sex,
        };

        console.log(RegisterChildBirth)
    
        fetch('https://frontend-hvlm.onrender.com/api/v1/admin', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body:JSON.stringify(RegisterChildBirth)
        })
        .then(response => response.json())
        .then(data => {
        console.log(data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }


    return (
        <div className=" h-screen bg-blue-950" >  
        <div className='flex'>    
        <div className="flex h-screen">
            <div className="bg-white w-[850px] rounded-sm p-6">
             {/* <img src={hospitalLogo} alt="Hospital Logo" className="mb-5 mx-auto" /> */}
                <h2 className="text-4xl font-bold text-blue-950 text-center mb-8">HOSPITAL SIGN UP</h2>
                   
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">

                    <div>

                        <label htmlFor="nurseName" className="block text-blue-950  mb-2 text-2xl">Nurse Name</label>
                        <input
                            type="text"
                            id="nurseName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Nurse Name"
                            required
                            value={nurseName}
                            onChange={(e) => setNurseName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="fatherFullName" className="block text-blue-950 font mb-2 text-2xl">Father Full Name</label>
                        <input
                            type="text"
                            id="fatherFullName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Father Full Name"
                            required
                            value={fatherFullName}
                            onChange={(e) => setFatherFullName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="motherFullNAme" className="block text-blue-950 font mb-2 text-2xl">Mother Name</label>
                        <input
                            type="text"
                            id="motherFullName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Mother's Full Name"
                            required
                            value={motherFullName}
                            onChange={(e) => setMotherFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="childFullName" className="block text-blue-950 font mb-2 text-2xl">Child Full Name</label>
                        <input
                            type="text"
                            id="childFullName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Child's Full Name"
                            required
                            value={childFullName}
                            onChange={(e) => setChildFullName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="stateOfOrigin" className="block text-blue-950 font mb-2 text-2xl"> State Of Origin </label>
                        <input
                            type="StateOfOrigin"
                            id="stateOfOrigin"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter State of Origin"
                            required
                            value={stateOfOrigin}
                            onChange={(e) => setStateOfOrigin(e.target.value)}
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="gender" className="block text-blue-950 font mb-2 text-2xl">Gender</label>
                        <select
                            id="gender"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select Gender </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    
                  
                    <p className="text-red-500">{errMsg}</p>
                    <div className="">
                      <FilledButton text="Sign Up" style= {{width: "500px"}} type="submit"/>
                        <div className="text-sm flex gap-3">
                            <p className="mb-4">Already have an account?</p>
                            <p className="underline text-blue-400  cursor-pointer">Sign in</p>
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

export default RegisterChildbirth;
