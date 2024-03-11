import React, { useState } from 'react';
import MorgueLogin from '../LoginPage/MorgueLogin';
import HospitalLogin from '../LoginPage/HospitalLogin';
import hospitalFront from '../../../assets/hospitlFront.jpg';

const LoginPage = () => {
    const [showHospitalLoginForm, setShowHospitalLoginForm] = useState(false);
    const [showMorgueLoginForm, setShowMorgueLoginForm] = useState(false);

    const handleShowHospitalLoginForm = () => {
        setShowHospitalLoginForm(true);
        setShowMorgueLoginForm(false);
    };

    const handleShowMorgueLoginForm = () => {
        setShowHospitalLoginForm(false);
        setShowMorgueLoginForm(true);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${hospitalFront})` }}>
            <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
                <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-3xl font-bold mb-8 text-center text-white">Login</h1>
                    <div className="mb-6 flex justify-between">
                        <button className="button-style" onClick={handleShowHospitalLoginForm}>
                            Login as Hospital
                        </button>
                        <button className="button-style" onClick={handleShowMorgueLoginForm}>
                            Login as Morgue
                        </button>
                    </div>
                    <p className="text-center mb-4 text-white">Or</p>
                    {showHospitalLoginForm && <HospitalLogin />}
                    {showMorgueLoginForm && <MorgueLogin />}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
