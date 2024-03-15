// import React, { useState, useEffect } from 'react';
// import statVitalLogo from '../../../assets/statVitalLogo.png';
// import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
// import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton';
// import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';

// const PWD_REGEX = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:`.,/'|"<>?])(?=.*[0-9]).{8,}$/;

// const HospitalSignUpForm = () => {
//     const navigate = useNavigate();

//     const [showPassword, setShowPassword] = useState(false);
//     const [errMsg, setErrMsg] = useState('');
//     const [validPassword, setValidPassword] = useState(false);
//     const [validMatch, setValidMatch] = useState(false);
//     const { register, formState: { errors } } = useForm();
//     const [signUpType, setSignUpType] = useState('');
//     const [facilityName, setFacilityName] = useState('');
//     const [facilityLocation, setFacilityLocation] = useState('');
    // const [facilityType, setFacilityType] = useState('');
    // const [certificationNumber, setCertificationNumber] = useState('');
    // const [officialEmail, setOfficialEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');


    // const handleButtonClick = () => {
    //     console.log("I got here");
    // };
//     useEffect(() => {
//         const result = PWD_REGEX.test(password);
//         setValidPassword(result);
//         const match = password === confirmPassword;
//         setValidMatch(match);
//     }, [password, confirmPassword]);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!signUpType) {
//             setErrMsg("SignUp Type must be clicked");
//             return;
//         }

//         const signUpData = {
//             facilityName,
//             facilityLocation,
//             sector: facilityType,
//             certificationNumber,
//             email: officialEmail,
//             phoneNumber,
//             password,
//             confirmPassword
//         };

//         if (signUpType === 'Hospital') {
//             fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/signUpHospital", {
//                 method: 'POST',
//                 headers: {
//                     'content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signUpData)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log("SUCCESSFUL")
//                 navigate('/birthlayout/registerbirth')
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//         } else if (signUpType === 'Mortuary') {
//             fetch("https://tops-chimp-promoted.ngrok-free.app/api/v2/signUpHospital", {
//                 method: 'POST',
//                 headers: {
//                     'content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signUpData)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log("SUCCESSFUL")
//                 navigate('/deathlayout/registerDeath')
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

    // return (
    //     <div className="bg-blue-950">
    //         <div className="flex">
    //             <div className="flex">
    //                 <div className="bg-white w-[850px] pt-0 rounded-sm p-6">
    //                     <img src={statVitalLogo} alt="Hospital Logo" className="mb-" />
    //                     <h2 className="text-4xl font-bold text-blue-950 text-center mb-8">HOSPITAL AND MORGUE SIGN UP</h2>
    //                     <p className="text-red-500">{errMsg}</p>
    //                     {/* <div className="text-red-500">{errMsg}</div> */}

    //                     <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">

//                     <div>

//                         <label htmlFor="facilityName" className="block text-blue-950  mb-2 text-2xl">Facility Name</label>
//                         <input
//                             type="text"
//                             id="facilityName"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="Enter Facility Name"
//                             required
//                             value={facilityName}
//                             onChange={(e) => setFacilityName(e.target.value)}
//                         />
//                     </div>
                    // <div>
                    //     <label htmlFor="facilityLocation" className="block text-blue-950 font mb-2 text-2xl">Facility Location</label>
                    //     <input
                    //         type="text"
                    //         id="facilityLocation"
                    //         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //         placeholder="Enter Facility Location"
                    //         required
                    //         value={facilityLocation}
                    //         onChange={(e) => setFacilityLocation(e.target.value)}
                    //     />
                    // </div>
                    // <div>
                    //     <label htmlFor="facilityType" className="block text-blue-950 font mb-2 text-2xl">Facility Type</label>
                    //     <select
                    //         id="facilityType"
                    //         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //         value={facilityType}
                    //         onChange={(e) => setFacilityType(e.target.value)}
                    //         required
                    //     >
                    //         <option value="">Select Facility Type</option>
                    //         <option className='text-2xl' value="private">Private</option>
                    //         <option className='text-2xl' value="public">Public</option>
                    //     </select>
                    // </div>
                    // <div>
                    //     <label htmlFor="certificationNumber" className="block text-blue-950 font mb-2 text-2xl">Certification Number</label>
                    //     <input
                    //         type="text"
                    //         id="certificationNumber"
                    //         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //         placeholder="Enter Certification Number"
                    //         required
                    //         value={certificationNumber}
                    //         onChange={(e) => setCertificationNumber(e.target.value)}
                    //     />
                    // </div>
                    // <div>
                    //     <label htmlFor="officialEmail" className="block text-blue-950 font mb-2 text-2xl">Official Email</label>
                    //     <input
                    //         type="email"
                    //         id="officialEmail"
                    //         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //         placeholder="@hospital.com"
                    //         required
                    //         value={officialEmail}
                    //         onChange={(e) => setOfficialEmail(e.target.value)}
                    //     />
                    // </div>

                    // <div>
                    //     <label htmlFor="phoneNumber" className="block text-blue-950 font mb-2 text-2xl">Faculty Contact Line</label>
                    //     <input
                    //         type="tel"
                    //         id="phoneNumber"
                    //         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //         placeholder="Enter Phone Number"
                    //         required
                    //         value={phoneNumber}
                    //         onChange={(e) => setPhoneNumber(e.target.value)}
                    //     />
                    // </div>                   
                    // <div>
                    // <label htmlFor="password" className="block text-blue-950 font mb-2 text-2xl">Password</label>
                    // <div className="relative">
                    //     <input
                    //         type={showPassword ? "text" : "password"}
                    //         id="password"
                    //         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //         placeholder="Enter Password"
                    //         onChange={(e) => setPassword(()=> {
                    //             return e.target.value
                    //         })}
                    //         value={password}
                    //         required
                    //         aria-invalid={validPassword ? "false" : "true"}

                    //     />
                    //     <button
                    //         className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                    //         onClick={togglePasswordVisibility}
                    //     >
                    //         {showPassword ? "Hide" : "Show"}
                    //     </button>
                    //         </div>
                    //         </div>
                    // <div>
                    //     <label htmlFor="confirmPassword" className="block text-blue-950 font mb-2 text-2xl">Confirm Password</label>
                    //     <div className="relative">
                    //         <input
                    //             type={showPassword ? "text" : "password"}
                    //             id="confirmPassword"
                    //             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    //             placeholder="Re-enter Password"
                    //             required
                    //             value={confirmPassword}
                    //             onChange={(e) => setConfirmPassword(e.target.value)}
                    //         />
                    //         <button
                    //             className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                    //             onClick={togglePasswordVisibility}
                    //         >
                    //             {showPassword ? "Hide" : "Show"}
                    //         </button>
                    //     </div>
                    //         </div>
                    
//                         </form>
//                         <div className="flex justify-center item-center ml-44 flex-col gap-3">
//                         <FilledButton
//                             text="Sign Up"
//                             style={{ width: "500px" }}
//                             type="submit"
//                             onClick={handleButtonClick}
//                         />
//                         <div className="text-sm flex gap-3">
//                             <p className="flex gap-3 text-sm text-blue-950">
//                                 Already have an Account? <br />
//                                 <span className="line">
//                                     <GhostButton text="Login" />
//                                 </span>
//                             </p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 <div className='content px-32 pt-80'>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HospitalSignUpForm;

import React, { useState, useEffect } from 'react';
import statVitalLogo from '../../../assets/statVitalLogo.png';
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:`.,/'|"<>?])(?=.*[0-9]).{8,}$/;

const HospitalSignUpForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validMatch, setValidMatch] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [facilityLocation, setFacilityLocation] = useState(false);
    const [facilityType, setFacilityType] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleButtonClick = () => {
        console.log("I got here");
    };

    useEffect(() => {
        if (errors.password) {
            setErrMsg("Password must contain at least one uppercase letter, one special character, one number, and be at least 8 characters long.");
        } else {
            setErrMsg('');
        }
    }, [errors.password]);

    const handleSignUp = async (data) => {
        const signUpData = {
            ...data,
        };

        try {
            const response = await fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/signUpHospital", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("SUCCESSFUL", responseData);
                navigate('/birthlayout/registerbirth');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-blue-950">
            <div className="flex justify-center">
                <div className="bg-white w-96 rounded-sm p-6">
                    <img src={statVitalLogo} alt="Hospital Logo" className="mb-6 mx-auto" />
                    <h2 className="text-4xl font-bold text-blue-950 text-center mb-8">HOSPITAL AND MORGUE SIGN UP</h2>
                    <p className="text-red-500">{errMsg}</p>

                    <form onSubmit={handleSubmit(handleSignUp)} className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col">
                            <label htmlFor="facilityName" className="text-blue-950 mb-2">Facility Name</label>
                            <input
                                type="text"
                                id="facilityName"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                {...register("facilityName", { required: true })}
                            />
                            {errors.facilityName && <span className="text-red-500">Facility Name is required</span>}
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
                        <label htmlFor="facilityType" className="block text-blue-950 font mb-2 text-2xl">Facility Type</label>
                        <select
                            id="facilityType"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            value={facilityType}
                            onChange={(e) => setFacilityType(e.target.value)}
                            required
                        >
                            <option value="">Select Facility Type</option>
                            <option className='text-2xl' value="private">Private</option>
                            <option className='text-2xl' value="public">Public</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="certificationNumber" className="block text-blue-950 font mb-2 text-2xl">Certification Number</label>
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
                        <label htmlFor="officialEmail" className="block text-blue-950 font mb-2 text-2xl">Official Email</label>
                        <input
                            type="email"
                            id="officialEmail"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="@hospital.com"
                            required
                            value={officialEmail}
                            onChange={(e) => setOfficialEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-blue-950 font mb-2 text-2xl">Faculty Contact Line</label>
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
                    <label htmlFor="password" className="block text-blue-950 font mb-2 text-2xl">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(()=> {
                                return e.target.value
                            })}
                            value={password}
                            required
                            aria-invalid={validPassword ? "false" : "true"}

                        />
                        <button
                            className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                            </div>
                            </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-blue-950 font mb-2 text-2xl">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Re-enter Password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                            </div>

                        <FilledButton text="Sign Up" type="submit" onClick={handleButtonClick} />
                    </form>

                    <div className="text-sm text-blue-950 mt-4">
                        Already have an Account? <br />
                        <GhostButton text="Login" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalSignUpForm;
