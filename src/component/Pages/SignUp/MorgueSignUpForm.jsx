import React, { useState } from 'react';
import hospitalLogo from '../../../assets/Untitled(4).jpg';
import backgroundImage from '../../../assets/clean-medical-background_53876-97927.jpg';

const MorgueSignUpForm = ({ title }) => {
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
        <div className="flex justify-center items-center h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>        
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-sm p-6 text-center">
                <img src={hospitalLogo} alt="Hospital Logo" className="mb-5 mx-auto" />
                <h2 className="text-4xl font-bold text-blue-900 text-center mb-8"> SIGN UP AS MORGUE </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
                    <div>
                        <label htmlFor="facilityName" className="block text-blue-900 font mb-2 text-2xl">Facility Name</label>
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
                        <label htmlFor="facilityLocation" className="block text-blue-900 font mb-2 text-2xl">Facility Location</label>
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
                        <label htmlFor="facilityType" className="block text-blue-900 font mb-2 text-2xl">Facility Type</label>
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
                        <label htmlFor="certificationNumber" className="block text-blue-900 font mb-2 text-2xl">Certification Number</label>
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
                        <label htmlFor="officialEmail" className="block text-blue-900 font mb-2 text-2xl">Official Email</label>
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
                        <label htmlFor="phoneNumber" className="block text-blue-900 font mb-2 text-2xl">Phone Number</label>
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
                        <label htmlFor="password" className="block text-blue-900 font mb-2 text-2xl">Password</label>
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
                        <label htmlFor="confirmPassword" className="block text-blue-900 font mb-2 text-2xl">Confirm Password</label>
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
                        <button
                            type="submit"
                            className="button-style bg-blue-400   focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:auto"
                        >
                            Register
                        </button>
                        <div className="text-sm">
                            <p className="mb-4">Already have an account?</p>
                            <p className="underline cursor-pointer">Sign in</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default MorgueSignUpForm;