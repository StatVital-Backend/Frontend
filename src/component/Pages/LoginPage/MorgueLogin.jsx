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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 justify-self-start">
                    <img src={morgueImage} alt="Morgue Background" className="w-full h-full object-cover" /> {/* Use morgue image */}
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-blue-400 text-center">Morgue Login</h2> {/* Update title */}
                    <p className="text-xl text-blue-400 text-center">Welcome to Morgue Login!</p> {/* Update welcome message */}
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                {/* ... SVG Path Data ... */}
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-blue-400 font-bold">Sign in with Google</h1>
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-blue-400 uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
=======
                    <img src={morgueImage} alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="w-full p-8 lg:w-1/2">
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
