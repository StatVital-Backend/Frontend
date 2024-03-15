// import React, {useRef, useState, useEffect } from 'react';
// import statVitalLogo from '../../../assets/statVitalLogo.png';
// import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
// import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton';
// import { useForm } from "react-hook-form"
// import { useNavigate } from 'react-router-dom';



// const PWD_REGEX = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:`.,/'|"<>?])(?=.*[0-9]).{8,}$/;
// // const REACT_APP_BACKEND_URL = "https://d8d1-62-173-45-238.ngrok-free.app/api/v1/"; 

// const HospitalSignUpForm = () => {
//     const navigate = useNavigate();

//     // const path = '/signUpHospital'; 

//     // const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}${path}`;
//     // console.log(BASE_URL)
//     // console.log(REACT_APP_BACKEND_URL)
    
//     const [showMessage, setShowMesssage] = useState(false)
//     const { register, formState: { errors } } = useForm();

    
//     const [signUpType, setSignUpType] = useState({signUpType : ''});
//     const [facilityName, setFacilityName] = useState('');
//     const [facilityLocation, setFacilityLocation] = useState('');
//     const [facilityType, setFacilityType] = useState('');
//     const [certificationNumber, setCertificationNumber] = useState('');
//     const [officialEmail, setOfficialEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [password, setPassword] = useState ('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [validPassword, setValidPassword] = useState (false);
//     const [matchPassword, setMatchPassword] = useState ('');
//     const [validMatch, setValidMatch] = useState (false);
//     const [matchFocus, setMatchFocus] = useState (false);
//     const [errMsg, setErrMsg] = useState('');


//     const togglePasswordVisibility =() => {
//         setShowPassword(!showPassword);
//     }

//     useEffect (()=> {
//         const result = PWD_REGEX.test(password);
//         console.log(result);
//         console.log(password);
//         setValidPassword(result);
//         const match = password === matchPassword;
//         setValidMatch(match);
//     }, [password, matchPassword]);


//     useEffect (() => {
//         setErrMsg('')
//     }, [ password, matchPassword]);



//     const handleSubmit = async(e) => {
//         e.preventDefault()    

//         const v2 = PWD_REGEX.test(password);
//         if (!v2) {
//             setErrMsg("Password must contain 8 to 24 characters, uppercase and lowercase letters, a number and a special character:");
//             return;
//         }
//     }


//     const SignUp = {
//         facilityName: facilityName,
//         facilityLocation: facilityLocation,
//         sector: facilityType,
//         certificationNumber: certificationNumber,
//         email: officialEmail,
//         phoneNumber: phoneNumber,
//         password: password,
//     };
//     if(signUpType.signUpType === 'Hospital'){
//         fetch("https://7168-102-89-32-113.ngrok-free.app/api/v1/signUpHospital", {
//             method: 'POST',
//             headers: {
//                 'content-Type': 'application/json'
//             },
//             body:JSON.stringify(SignUp)
//         }).then(response => response.json())
//           .then(data => {
//           console.log("SUCCESSFUL")
//           navigate('/birthlayout/registerbirth')
//         }).catch(error => {
//             console.error('Error:', error);
//         });
//       }
//     else if (signUpType.signUpType === 'Mortuary'){
//         fetch("https://7168-102-89-32-113.ngrok-free.app/api/v2/Sign-In-Morgue", {
//             method: 'POST',
//             headers: {
//                 'content-Type': 'application/json'
//             },
//             body:JSON.stringify(SignUp)
//         }).then(response => response.json())
//         .then(data => {
//         console.log("SUCCESSFUL")
//         navigate('/deathlayout/registerDeath')
//         }).catch(error => {
//         console.error('Error:', error);
//         });
//     }
//     else{
//         setErrMsg("SignUp Type must be clicked");
//         // console.log("SignUp Type must be clicked ")

//         return;
//     }
    


    
//     //     try {
//     //         const response = await fetch("https://7168-102-89-32-113.ngrok-free.app/api/v1/signUpHospital", {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify(HospitalSignUp)
//     //         });
            
//     //         if (response.ok) {
//     //             const data = await response.json();
//     //             console.log("SUCCESSFUL");
//     //             console.log(data);
//     //             navigate("/hospitallogin")
//     //         }
            
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //     }
        
//     // }


//     return (
        
//         <div className="  bg-blue-950" >  
//         <div className='flex'>    
//         <div className="flex">
//             <div className="bg-white w-[850px] pt-0 rounded-sm p-6">
//              <img src={statVitalLogo} alt="Hospital Logo" className="mb-" />
//                 <h2 className="text-4xl font-bold text-blue 950 text-center mb-8">HOSPITAL AND MORGUE SIGN UP</h2>
//                 <p className="text-red-500">{errMsg}</p>


//                 <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">

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
//                     <div>
//                         <label htmlFor="facilityLocation" className="block text-blue-950 font mb-2 text-2xl">Facility Location</label>
//                         <input
//                             type="text"
//                             id="facilityLocation"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="Enter Facility Location"
//                             required
//                             value={facilityLocation}
//                             onChange={(e) => setFacilityLocation(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="facilityType" className="block text-blue-950 font mb-2 text-2xl">Facility Type</label>
//                         <select
//                             id="facilityType"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             value={facilityType}
//                             onChange={(e) => setFacilityType(e.target.value)}
//                             required
//                         >
//                             <option value="">Select Facility Type</option>
//                             <option className='text-2xl' value="private">Private</option>
//                             <option className='text-2xl' value="public">Public</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="certificationNumber" className="block text-blue-950 font mb-2 text-2xl">Certification Number</label>
//                         <input
//                             type="text"
//                             id="certificationNumber"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="Enter Certification Number"
//                             required
//                             value={certificationNumber}
//                             onChange={(e) => setCertificationNumber(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="officialEmail" className="block text-blue-950 font mb-2 text-2xl">Official Email</label>
//                         <input
//                             type="email"
//                             id="officialEmail"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="@hospital.com"
//                             required
//                             value={officialEmail}
//                             onChange={(e) => setOfficialEmail(e.target.value)}
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="phoneNumber" className="block text-blue-950 font mb-2 text-2xl">Faculty Contact Line</label>
//                         <input
//                             type="tel"
//                             id="phoneNumber"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="Enter Phone Number"
//                             required
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                         />
//                     </div>

                    
//                     <div>
//                         <label htmlFor="password" className="block text-blue-950 font mb-2 text-2xl">Password</label>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="password"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="Enter Password"
//                             onChange={(e) => setPassword(()=> {
//                                 return e.target.value
//                             })}
//                             value={password}
//                             required
//                             aria-invalid={validPassword ? "false" : "true"}
//                         />
//                         <button className='absoluten inset-y-0 right-0 px-4 py-2 focus:outline-none'
//                             onClick={togglePasswordVisibility}
//                         >
//                             {showPassword ? "Hide" : "show"}
//                         </button>
//                     </div>
                    
//                     <div>
//                         <label htmlFor="confirmPassword" className="block text-blue-950 font mb-2 text-2xl">Confirm Password</label>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="confirmPassword"
//                             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                             placeholder="Re-enter Password"
//                             required
//                             value={matchPassword}
//                             onChange={(e) => setMatchPassword(e.target.value)}
//                             caria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}

//                         />
//                         <button className='absoluten inset-y-0 right-0 px-4 py-2 focus:outline-none'
//                         onClick={togglePasswordVisibility}
//                         >
//                             {showPassword ? "Hide" : "show"}
//                         </button>
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}aria-live='assertive'>
//                             Must match the first password input field.
//                         </p>

//                     </div>

//                         <div className='flex gap-5 text-2xl'>
//                             <div >
//                                 <h1 className='text-blue-950'>Signup Type</h1>
//                             </div>

//                             <div className='gap-5 text-blue-950 flex'>
//                                 <label htmlFor="Hospital">
//                                     <input type="radio"
//                                     className='w-10' 
//                                     name="signUpType"
//                                     value="hospital"
//                                     id="hospitalId"
//                                     onChange={(e)=>{
//                                     const value = e.target.value
//                                     setSignUpType({[name]: value})
//                                     }}
//                                     />Hospital
//                                 </label>

//                                 <label htmlFor="Morgue">
//                                     <input type="radio"
//                                     className='w-10'
//                                     name="signUpType"
//                                     value="morgue"
//                                     id="morgueId" 
//                                     onChange={(e)=> {
//                                         const value = e.target.value 
//                                         const name = e.target.value
//                                     }}
//                                     />Morgue
//                                 </label>
//                             </div>
//                         </div>                    




//                     <div className="pb-2 ml-[130px]">
//                       <FilledButton  disabled={!validPassword || !validMatch ? true : false} text="Sign Up" style= {{width: "500px"}} type="submit"/>
//                         <div className="text-sm flex gap-3">
//                         <p className=" flex  gap-3 text-sm text-blue-950">
//                             Already have an Account? <br/>    
//                             <span className='line'>
//                             <GhostButton text="Login"/>
//                             </span>
//                         </p>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//         </div>
//         <div className='content px-32 pt-80'>
//             <h1 className='text-white flex text-5xl'>
//             Navigate Life's Journey with
//              Precision - <br /> Capturing Every Moment, 
//               Every Statistic, Every Insight!</h1>
//               <p className='text-white pt-10 text-2xl'> We are a team of passionate individuals who believe in the power of data and its impact on society.
//             Committed to providing the best tools and resources, we empower you to capture and analyze 
//             your life's journey. By encapsulating every moment, statistic, and insight, we enable informed 
//             decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, 
//             eagerly anticipating our role in your story.</p>
//         </div>
//         </div>  
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
    const { register, formState: { errors } } = useForm();

    const handleSignUp = () => {
        navigate ('/hospitallogin')
    }

    const [signUpType, setSignUpType] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [facilityLocation, setFacilityLocation] = useState('');
    const [facilityName, setFacilityName] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState ('');
    const [validPassword, setValidPassword] = useState (false);
    const [matchPassword, setMatchPassword] = useState ('');    const [validMatch, setValidMatch] = useState (false);
    const [matchFocus, setMatchFocus] = useState (false);
    const [formData, setFormData] = useState({
        facilityName: '',
        facilityLocation: '',
        facilityType: '',
        certificationNumber: '',
        officialEmail: '',
        phoneNumber: '',
        password: '',
        matchPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [formData.password, formData.matchPassword]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!PWD_REGEX.test(formData.password)) {
            setErrMsg("Password must contain 8 to 24 characters, uppercase and lowercase letters, a number, and a special character.");
            return;
        }

        // Proceed with form submission
        const signUpData = {
            ...formData,
            signUpType
        };

        let apiUrl = '';

        if (signUpType === 'Hospital') {
            apiUrl = "https://7168-102-89-32-113.ngrok-free.app/api/v1/signUpHospital";
        } else if (signUpType === 'Morgue') {
            apiUrl = "https://7168-102-89-32-113.ngrok-free.app/api/v2/Sign-In-Morgue";
        } else {
            setErrMsg("SignUp Type must be selected");
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpData)
            });

            if (response.ok) {
                console.log("SUCCESSFUL");
                if (signUpType === 'Hospital') {
                    navigate('/birthlayout/registerbirth');
                } else if (signUpType === 'Morgue') {
                    navigate('/deathlayout/registerDeath');
                }
            } else {
                throw new Error('Failed to sign up');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex">
            <div className="flex">
                <div className="bg-white w-[850px] pt-0 rounded-sm p-6">
                    <img src={statVitalLogo} alt="Hospital Logo" className="mb-" />
                    <h2 className="text-4xl font-bold text-blue-950 text-center mb-8">HOSPITAL AND MORGUE SIGN UP</h2>
                    <p className="text-red-500">{errMsg}</p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">

                    <div>

                         <label htmlFor="facilityName" className="block text-blue-950  mb-2 text-2xl">Facility Name</label>
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
                        <label htmlFor="facilityLocation" className="block text-blue-950 font mb-2 text-2xl">Facility Location</label>
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
                        <button className='absoluten inset-y-0 right-0 px-4 py-2 focus:outline-none'
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "show"}
                        </button>
                    </div>
                    
                    <div>
                        <label htmlFor="confirmPassword" className="block text-blue-950 font mb-2 text-2xl">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="Re-enter Password"
                            required
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            caria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}

                        />
                        <button className='absoluten inset-y-0 right-0 px-4 py-2 focus:outline-none'
                        onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "show"}
                        </button>
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}aria-live='assertive'>
                            Must match the first password input field.
                        </p>

                    </div>

                        <div className='flex gap-5 '>
                            <div >
                                <h1 className='text-blue-950 text-2xl'>Signup Type</h1>
                            </div>

                            <div className='gap-5 text-blue-950 flex'>
                                <label htmlFor="Hospital">
                                    <input type="radio"
                                    className='w-10' 
                                    name="signUpType"
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
                        </div>  

                        {/* Your form inputs */}

                        <div className="pb-2 justify-center flex center pt-10 mr-96">
                            <FilledButton disabled={!formData.password || !formData.matchPassword} text="Sign Up" style={{ width: "500px" }} type="submit" />
                            {/* <div className="text-sm flex "> */}
                            {/* </div> */}
                        </div>
                    </form>
                    <div className='flex gap-3 ml-44'>
                        <p>Already have an Account? </p>
                        <GhostButton text="Login" onClick={handleSignUp} />
                    </div>
                </div>
            </div>
            <div className="content px-32 bg-blue-950 pt-80">
                <h1 className="text-white flex text-5xl">
                    Navigate Life's Journey with Precision - <br /> Capturing Every Moment, Every Statistic, Every Insight!
                </h1>
                <p className="text-white pt-10 text-2xl">
                    We are a team of passionate individuals who believe in the power of data and its impact on society.
                    Committed to providing the best tools and resources, we empower you to capture and analyze
                    your life's journey. By encapsulating every moment, statistic, and insight, we enable informed
                    decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision,
                    eagerly anticipating our role in your story.
                </p>
            </div>
        </div>
    );
};

export default HospitalSignUpForm;
