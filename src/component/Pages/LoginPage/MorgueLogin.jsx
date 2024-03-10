import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import morgueImage from '../../../assets/a-typical-morgue-picture-that-can-be-use-as-a-site-background.jpg';

const MorgueLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${morgueImage})` }}>
            <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
                <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl font-semibold text-blue-400 text-center">Morgue Login</h2>
                    <p className="text-xl text-blue-400 text-center">Welcome to Morgue Login!</p>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-blue-400 text-sm font-bold mb-2">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-style w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            placeholder="Enter your email"
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
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button onClick={handleSubmit} className="button-style bg-green-500 text-white hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/signup" className="text-xs text-blue-400 uppercase">or sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MorgueLogin;
