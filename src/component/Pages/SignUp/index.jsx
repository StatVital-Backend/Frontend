import React, { useState } from 'react';
import hospitalLogo from '../../../assets/statVitalLogo.png';
import lewis from '../../../assets/lewis-keegan-XQaqV5qYcXg-unsplash.jpg';
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
import { Link } from 'react-router-dom';

const SignUp = ({ title }) => {
    const [facilityName, setFacilityName] = useState('');
    const [facilityLocation, setFacilityLocation] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrMsg('');

        if (!facilityName) {
            setErrMsg('Facility Name is required.');
            return;
        }

        if (!facilityLocation) {
            setErrMsg('Facility Location is required.');
            return;
        }

        if (!facilityType) {
            setErrMsg('Facility Type is required.');
            return;
        }

        if (!certificationNumber) {
            setErrMsg('Certification Number is required.');
            return;
        }

        if (!officialEmail) {
            setErrMsg('Official Email is required.');
            return;
        }

        if (!phoneNumber) {
            setErrMsg('Phone Number is required.');
            return;
        }

        if (!password) {
            setErrMsg('Password is required.');
            return;
        }
    };

    return (
        <div className="flex justify-center items-center ">
            <div className="w-3/5  bg-blue-950 rounded-lg shadow-lg p-5 text-white">
                <img src={hospitalLogo} alt="Hospital Logo" className="mb-5" />
                <h2 className="text-4xl font-bold pb-5"> SIGN UP AS HOSPITAL </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="facilityName" className="block mb-2 text-3xl font-medium">Facility Name</label>
                        <input
                            type="text"
                            id="facilityName"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Facility Name"
                            required
                            value={facilityName}
                            onChange={(e) => setFacilityName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="facilityLocation" className="block mb-2 text-3xl font-medium">Facility Location</label>
                        <input
                            type="text"
                            id="facilityLocation"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Facility Location"
                            required
                            value={facilityLocation}
                            onChange={(e) => setFacilityLocation(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="facilityType" className="block mb-2 text-3xl font-medium">Facility Type</label>
                        <input
                            type="text"
                            id="facilityType"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Facility Type"
                            required
                            value={facilityType}
                            onChange={(e) => setFacilityType(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="certificationNumber" className="block mb-2 text-3xl font-medium">Certification Number</label>
                        <input
                            type="text"
                            id="certificationNumber"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Certification Number"
                            required
                            value={certificationNumber}
                            onChange={(e) => setCertificationNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="officialEmail" className="block mb-2 text-3xl font-medium">Official Email</label>
                        <input
                            type="email"
                            id="officialEmail"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Official Email"
                            required
                            value={officialEmail}
                            onChange={(e) => setOfficialEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block mb-2 text-3xl font-medium">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Phone Number"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-3xl font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className="text-red-500 pb-5">{errMsg}</p>
                    <div className="flex items-center justify-between mb-4">
                      <Link to="/layout2/NavBar2"><FilledButton text="Signup"  style={{width: '130px'}}/>  </Link>
                        <div className="flex items-center text-sm">
                            <p>Already have an account?</p>
                            <p>Sign in</p>
                        </div>  <br />
                        {/* <p className="underline cursor-pointer ml-1">Sign in</p> */}

                    </div>
                </form>
            </div>
            {/* <img src={lewis} alt="Background" className="w-1/2 h-full object-cover object-right" /> */}
        </div>
    );
};

export default SignUp;
