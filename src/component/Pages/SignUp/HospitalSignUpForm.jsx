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
import { useForm } from "react-hook-form"
import { useNavigate, Link } from 'react-router-dom';



// const PWD_REGEX = /^(?=.[A-Z])(?=.[!@#$%^&()_+{}|:`.,/'|"<>?])(?=.[0-9]).{8,}$/;
// const REACT_APP_BACKEND_URL = "https://d8d1-62-173-45-238.ngrok-free.app/api/v1/"; 

const HospitalSignUpForm = () => {
    const navigate = useNavigate();

    // const path = '/signUpHospital'; 

    // const BASE_URL = ${process.env.REACT_APP_BACKEND_URL}${path};
    // console.log(BASE_URL)
    // console.log(REACT_APP_BACKEND_URL)
    
    const [showMessage, setShowMesssage] = useState(false)
    const { register, formState: { errors } } = useForm();

    
    // const [signUpType, setSignUpType] = useState({signUpType : ''});
    const [facilityName, setFacilityName] = useState('');
    const [facilityLocation, setFacilityLocation] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState ('');
    const [validPassword, setValidPassword] = useState (false);
    const [matchPassword, setMatchPassword] = useState ('');
    const [validMatch, setValidMatch] = useState (false);
    const [matchFocus, setMatchFocus] = useState (false);
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // useEffect (()=> {
    //     const result = PWD_REGEX.test(password);
    //     console.log(result);
    //     console.log(password);
    //     setValidPassword(result);
    //     const match = password === matchPassword;
    //     setValidMatch(match);
    // }, [password, matchPassword]);


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


    const handleSubmit = async(e) => {
        e.preventDefault()    

        // const v2 = PWD_REGEX.test(password);
        // if (!v2) {
        //     setErrMsg("Password must contain 8 to 24 characters, uppercase and lowercase letters, a number and a special character:");
        //     return;
        // }
    }

    

    const handleBirthReg = async (e)=> {
        e.preventDefault();

        console.log("i am here")

        const obj = {
        facilityName: facilityName,
        facilityLocation: facilityLocation,
        sector: facilityType,
        certificationNumber: certificationNumber,
        email: officialEmail,
        phoneNumber: phoneNumber,
        password: password,}

        console.log(obj)

    // fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/signUpHospital", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(HospitalSignUp)
    //         }).then(response => response.json())
    //         .then(data =>{
    //             console.log("SUCCESSFUL");
    //             console.log(data);
    //             navigate("/hospitallogin")
    //         }).catch(error=>{
    //             console.error('Error:', error);
    //         })
    
    
    try {
        const response = await fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/signUpHospital", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        console.log(response.message)
        
        if (response.ok) {
            const data = await response.json();
                setErrMsg(data.message)
                console.log(data);
                setTimeout(()=>{
                    setSuccessMsg(data.message);
                }, 1500);
                // console.log("SUCCESSFUL")
                navigate("/hospitallogin")
            }
        
        } catch (error) {
            console.error('Error:', error);
            // setErrMsg(error.message)
            setErrMsg("Network issue")
           }
    

            
    };

    return (
        
        <div className="  bg-blue-950" >  
        <div className='flex'>    
        <div className="flex">
            <div className="bg-white w-[850px] pt-0 rounded-sm p-6">
             <img src={statVitalLogo} alt="Hospital Logo" className="mb-" />
                <h2 className="text-4xl font-bold text-blue 950 text-center mb-8">HOSPITAL AND MORGUE SIGN UP</h2>
                <p className="text-red-500">{errMsg}</p>
                <p className="text-red-500">{successMsg}</p>

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
                        <input
                            type="password"
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
                    </div>
                    
                    <div>
                        <label htmlFor="confirmPassword" className="block text-blue-950 font mb-2 text-2xl">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Re-enter Password"
                            required
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            caria-describedby="confirmnote"
                            // onFocus={() => setMatchFocus(true)}
                            // onBlur={() => setMatchFocus(false)}

                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}aria-live='assertive'>
                            Must match the first password input field.
                        </p>

                    </div>

                        {/* <div className='flex gap-5 text-2xl'>
                            <div >
                                <h1 className='text-blue-950'>Signup Type</h1>
                            </div>

                            <div className='gap-5 text-blue-950 flex'>
                                <label htmlFor="Hospital">
                                    <input type="radio"
                                    className='w-10' 
                                    value="hospital"
                                    id="hospitalId"
                                    onChange={(e)=>{
                                    const value = e.target.value
                                    setSignUpType({[name]: value})
                                    }}
                                    />Hospital
                                </label>

                                <label htmlFor="Morgue">
                                    <input type="radio"
                                    className='w-10'
                                    name="signUpType"
                                    value="morgue"
                                    id="morgueId" 
                                    onChange={(e)=> {
                                        const value = e.target.value 
                                        const name = e.target.value
                                    }}
                                    />Morgue
                                </label>
                            </div>
                        </div>                     */}




                    <div className="pb-2 ml-[130px]">
                      {/* <FilledButton   text="Sign Up" style= {{width: "500px"}} type="submit" onClick={handleBirthReg}/> */}
                      <button className ='bg-blue-400 py-3 border-radius text-[20px] text-white font-family:   Georgia Cambria "Times New Roman" Times
         serif line-height: 1.5rem; rounded-2xl' style= {{width: "500px"}} type="submit" onClick={handleBirthReg}>Sign up</button>
                        <div className="text-sm flex gap-3">
                        <p className=" flex  gap-3 text-sm text-blue-950">
                            Already have an Account? <br/>    
                            <span className='line'>
                           <Link to="/hospitallogin"><GhostButton text="Login"/> </Link> 
                            </span>
                        </p>
                        </div>
                    </div>
                </form>
            </div>

                        <FilledButton text="Sign Up" type="submit" onClick={handleButtonClick} />
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