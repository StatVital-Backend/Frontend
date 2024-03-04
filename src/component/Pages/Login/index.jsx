import React, { useState } from 'react';

const LoginForm = ({ title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover">
                    <img
                        src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">{title}</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome to StatVital!</p>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                {/* ... SVG Path Data ... */}
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-style"
                        />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-style"
                        />
                    </div>
                    <div className="mt-8">
                        <button type="submit" onClick={handleSubmit} className="button-style">Login</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoginPage = () => {
    return (
        <div>
            <LoginForm title="Login as Hospital" />
            <LoginForm title="Login as Morgue" />
        </div>
    );
};

export default LoginPage;
