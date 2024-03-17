import React, { useState } from 'react';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';


const MorgueReg = ({ title }) => {
    const { register, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();



    const [deceasedName, setDeceasedName] = useState('');
    const [timeOfDeath, setTimeOfDeath] = useState('');
    const [dateOfDeath, setDateOfDeath] = useState('');
    const [causeOfDeath, setCauseOfDeath] = useState('');
    const [broughtby, setBroughtBy] = useState('');
    const [mortician, setMortician] = useState('');
    const [placeOfDeath, setPlaceOfDeath] = useState('');
    const [deceasedResidence, setDeceasedResidence] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('')

    const [errMsg, setErrMsg] = useState('');

    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja"
    ];

    const handleSubmit = (e) => {
        e.preventDefault() 

        const RegisterDeath = {
            deceasedName: deceasedName,
            timeOfDeath: timeOfDeath,
            dateOfDeath: dateOfDeath,
            causeOfDeath: causeOfDeath,
            broughtby: broughtby,
            mortician: mortician,
            placeOfDeath: placeOfDeath,
            deceasedResidence: deceasedResidence,
            age: age,
            gender: gender,
        };

        console.log(RegisterDeath)
    
        fetch('https://frontend-hvlm.onrender.com/api/v1/admin', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body:JSON.stringify(RegisterDeath)
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
        <div className=" flex px-56 pt-2 h-[1200px]" >  
        <div className='bg-blue-950 h-[1030px] w-full '>    
        <div className="flex justify-center pt-[30px] items-center h-[1000px]">
            <div className="bg-white px-[300px] h-[1000px] rounded-sm">
                   
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">

                    <div>

                        <label htmlFor="deceasedName" className="block text-blue-950 mb-2 text-2xl">Deceased Name </label>
                        <input
                            type="text"
                            id="deceasedName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Deceased Name"
                            required
                            value={deceasedName}
                            onChange={(e) => setDeceasedName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="timeOfDeath" className="block text-blue-950 font mb-2 text-2xl">Time of Death</label>
                        <input
                            type="time"
                            id="timeOfDeath"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Time Of Death"
                            required
                            value={timeOfDeath}
                            onChange={(e) => setTimeOfDeath(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="dateOfDeath" className="block text-blue-950 font mb-2 text-2xl">Date Of Death</label>
                        <input
                            type="date"
                            id="dateOfDeath"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Date Of Death"
                            required
                            value={dateOfDeath}
                            onChange={(e) => setDateOfDeath(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="causeOfDeath" className="block text-blue-950 font mb-2 text-2xl">Cause Of Death </label>
                        <input
                            type="text"
                            id="causeOfDeath"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Cause Of Death"
                            required
                            value={causeOfDeath}
                            onChange={(e) => setCauseOfDeath(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="broughtBy" className="block text-blue-950 font mb-2 text-2xl"> Brought By </label>
                        <input
                            type="text"
                            id="broughtBy"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Brought By"
                            required
                            value={broughtby}
                            onChange={(e) => setBroughtBy(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="mortician" className="block text-blue-950 font mb-2 text-2xl"> Mortician </label>
                        <input
                            type="text"
                            id="Mortician"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Mortician Full Name"
                            required
                            value={mortician}
                            onChange={(e) => setMortician(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="placeOfDeath" className="block text-blue-950 font mb-2 text-2xl"> Place Of Death </label>
                        <input
                            type="text"
                            id="placeOfDeath"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Place Of Death"
                            required
                            value={placeOfDeath}
                            onChange={(e) => setPlaceOfDeath(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="deceasedResidence" className="block text-blue-950 font mb-2 text-2xl"> Deceased Residence </label>
                        <input
                            type="text"
                            id="deceasedResidence"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Deceased Residence"
                            required
                            value={deceasedResidence}
                            onChange={(e) => setDeceasedResidence(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="age" className="block text-blue-950 font mb-2 text-2xl"> Age </label>
                        <input
                            type="number"
                            id="age"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Deceased Age"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>                    
                    <div>
                        <label htmlFor="gender" className="block text-blue-950 font mb-2 text-2xl">Gender</label>
                        <select
                            id="sex"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select Gender </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <div className="pt-20 pl-30">
                      <FilledButton text="Register" style= {{width: "500px"}} type="submit"/>
                    </div>
                    </div>

                    
                  
                    <p className="text-red-500">{errMsg}</p>
                    
                </form>
            </div>

        </div>

        </div>  
        </div>
    );
};
export default MorgueReg;