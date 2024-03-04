import React, { useState } from 'react';
import patricia from '../../../assets/patricia-prudente--P2djqAwM8U-unsplash.jpg';

const SignUpForm = ({ title }) => {
    const [hospitalType, setHospitalType] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [hospitalCategory, setHospitalCategory] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [locality, setLocality] = useState('');
    const [state, setState] = useState('');
    const [lga, setLGA] = useState('');
    const [OperationPermit, setOperationPermit] = useState('');
    const [operatingLicense, setOperatingLicense] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl text-center mb-4">{title}</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="hospitalType">Hospital Type</label>
                    <input
                        type="text"
                        id="hospitalType"
                        value={hospitalType}
                        onChange={(e) => setHospitalType(e.target.value)}
                    />

                    <label htmlFor="hospitalName">Hospital Name</label>
                    <input
                        type="text"
                        id="hospitalName"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                    />

                    <label htmlFor="hospitalCategory">Hospital Category</label>
                    <input
                        type="text"
                        id="hospitalCategory"
                        value={hospitalCategory}
                        onChange={(e) => setHospitalCategory(e.target.value)}
                    />

                    <label htmlFor="phoneNumber">Contact Person's Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    <label htmlFor="email">Contact Person's Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <label htmlFor="locality">Locality</label>
                    <input
                        type="text"
                        id="locality"
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                    />

                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />

                    <label htmlFor="lga">LGA</label>
                    <input
                        type="text"
                        id="lga"
                        value={lga}
                        onChange={(e) => setLGA(e.target.value)}
                    />

                    <label htmlFor="OperationPermit">Operation Permit</label>
                    <input
                        type="text"
                        id="OperationPermit"
                        value={OperationPermit}
                        onChange={(e) => setOperationPermit(e.target.value)}
                    />

                    <label htmlFor="operatingLicense">Operating License</label>
                    <input
                        type="text"
                        id="operatingLicense"
                        value={operatingLicense}
                        onChange={(e) => setOperatingLicense(e.target.value)}
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <img src={patricia} alt="Doctors holding a newborn baby" className="hidden lg:block absolute top-0 right-0 w-1/3" />
        </div>
    );
};

const SignUp = () => {
    return (
        <div>
            <SignUpForm title="Sign Up as Hospital" />
            <SignUpForm title="Sign Up as Morgue" />
        </div>
    );
};

export default SignUp;
