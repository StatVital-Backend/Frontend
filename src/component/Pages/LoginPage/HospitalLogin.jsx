import React, { useState } from 'react';
import blackFemale from '../../../assets/smiling-nurse3.jpeg';

const HospitalLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                {/* Image on the left */}
                <div className="lg:w-1/2">
                    <img src={blackFemale} alt="Background" className="w-full h-full object-cover" />
                </div>
                {/* Login form on the right */}
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-blue-400 text-center">Hospital Login</h2>
                    <p className="text-xl text-blue-400 text-center">Welcome to Hospital Login!</p>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-blue-400 text-sm font-bold mb-2">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-style w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="block text-blue-400 text-sm font-bold mb-2">Password</label>
                            <a href="#" className="text-xs text-blue-400">Forget Password?</a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-style w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button onClick={handleSubmit} className="button-style bg-blue-400 text-white hover:bg-blue-500">
                            Login as Hospital
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalLogin;
