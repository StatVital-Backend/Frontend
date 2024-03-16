import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import Certificate from '../Pages/Certificate/certificate';

const RegisterChildbirth = ({ title }) => {
    const { register, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [fatherFullName, setFatherFullName] = useState('');
    const [motherFullName, setMotherFullName] = useState('');
    const [childFullName, setChildFullName] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [sex, setSex] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);


    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const RegisterChildBirth = {
            name: name,
            fatherFullName: fatherFullName,
            motherFullName: motherFullName,
            childFullName: childFullName,
            stateOfOrigin: stateOfOrigin,
            sex: gender,
        };

        fetch('https://tops-chimp-promoted.ngrok-free.app/api/v1/RegisterChild', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(RegisterChildBirth)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setRegistrationData(data); 
            setIsRegistered(true);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className=" bg-blue-400 py-4 flex">
            <div className='flex justify-center center'>
                <div className="flex h-screen">
                    <div className="bg-white w-[1200px]  px-30 rounded-sm p-6">
                <form onSubmit={handleSubmit}>
               
                <div className="mb-4">
                    <label htmlFor="name" className="block text-blue-900 font mb-2 text-2xl">Name</label>
                    <input
                        id="nurseName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="enter nurse name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fatherFullName" className="block text-blue-900 font mb-2 text-2xl">Father's Full Name</label>
                    <input
                        id="fatherFullName"
                        type="text"
                        value={fatherFullName}
                        onChange={(e) => setFatherFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter father full name" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="motherFullName" className="block text-blue-900 font mb-2 text-2xl">Mother's Full Name</label>
                    <input
                        id="motherFullName"
                        type="text"
                        value={motherFullName}
                        onChange={(e) => setMotherFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter mother's full name" required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="stateOfOrigin" className="block text-blue-900 font mb-2 text-2xl ">State of Origin</label>
                    <select
                        id="stateOfOrigin"
                        value={stateOfOrigin}
                        onChange={(e) => setStateOfOrigin(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        required
                    >
                        <option value="">Select State</option>
                        {nigerianStates.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lg" className="block text-blue-900 font mb-2 text-2xl">Local Government</label>
                    <input 
                        id="childFullName"
                        type="text"
                        value={childFullName}
                        onChange={(e) => setChildFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter child full name" required
                    />
                </div>

                <div className="mb-4 ">
                    <label htmlFor="sex" className="block text-blue-900 font mb-2 text-2xl">Sex</label>
                    <select
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        required
                        >
                        <option className='text-2xl' value="">Select Sex</option>
                        <option className='text-2xl' value="male">Male</option>
                        <option className='text-2xl' value="female">Female</option>
                    </select>
                </div>
                <div className="">
                        <FilledButton text="Register" style={{ width: "500px" }} type="submit" />
                </div>
                    </form>
                    </div>
                </div>
            </div>
            
            
            {isRegistered && <Certificate registrationData={registrationData} />}
        </div>
        
    );
};

export default RegisterChildbirth;
