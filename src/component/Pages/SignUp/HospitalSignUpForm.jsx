import React, {useRef, useState, useEffect } from 'react';
import hospitalLogo from '../../../assets/Untitled(4).jpg';
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';



const PWD_REGEX = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:`.,/'|"<>?])(?=.*[0-9]).{8,}$/;
// const REACT_APP_BACKEND_URL = "https://d8d1-62-173-45-238.ngrok-free.app/api/v1/"; 

const HospitalSignUpForm = ({ title }) => {
    // const path = '/signUpHospital'; 

    // const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}${path}`;
    // console.log(BASE_URL)
    // console.log(REACT_APP_BACKEND_URL)
    
    const [showMessage, setShowMesssage] = useState(false)
    const { register, formState: { errors } } = useForm();
    const navigate = useNavigate();

    

    const [facilityName, setFacilityName] = useState('');
    const [facilityLocation, setFacilityLocation] = useState('');
    const [facilityType, setFacilityType] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    const [password, setPassword] = useState ('');
    const [validPassword, setValidPassword] = useState (false);

    const [matchPassword, setMatchPassword] = useState ('');
    const [validMatch, setValidMatch] = useState (false);
    const [matchFocus, setMatchFocus] = useState (false);

    const [errMsg, setErrMsg] = useState('');

    useEffect (()=> {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);


    useEffect (() => {
        setErrMsg('')
    }, [ password, matchPassword]);

    // const handleLogin = () => {
    //     navigate('/hospitallogin')
    //   }
    const handleLogin = () => {
        navigate('/hospitallogin')
      }


    const handleSubmit = async(e) => {
        e.preventDefault()    

        const v2 = PWD_REGEX.test(password);
        if (!v2) {
            setErrMsg("Password must contain 8 to 24 characters, uppercase and lowercase letters, a number and a special character:");
            return;
        }

        const HospitalSignUp = {
            facilityName: facilityName,
            facilityLocation: facilityLocation,
            sector:facilityType,
            certificationNumber: certificationNumber,
            email: officialEmail,
            phoneNumber: phoneNumber,
            password: password,
        };

    
        // fetch("https://d8d1-62-173-45-238.ngrok-free.app/api/v1/signUpHospital", {
        // method: 'POST',
        // headers: {
        //     'content-Type': 'application/json'
        // },
        // body:JSON.stringify(HospitalSignUp)
        // })
        // .then(response => response.json())
        // .then(data => {
        // console.log("SUCCESSFUL");
        // })
        // .catch(error => {
        // console.error('Error:', error);
        // });
        try {
            const response = await fetch("https:/2d09-62-173-45-238.ngrok-free.app/api/v1/signUpHospital", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(HospitalSignUp)
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log("SUCCESSFUL");
                console.log(data);
                // throw new Error('Network response was not ok');
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
        
    }


    return (
        
        <div className=" h-screen bg-blue-950" >  
        <div className='flex'>    
        <div className="flex h-screen">
            <div className="bg-white w-[850px] pt-0 rounded-sm p-6">
             <img src={hospitalLogo} alt="Hospital Logo" className="mb-5 mx-auto" />
                <h2 className="text-4xl font-bold text-blue 950 text-center mb-8">HOSPITAL SIGN UP</h2>
                <p className="text-red-500">{errMsg}</p>

                    <div>
                        <div className='flex gap-5 ml-44 text-2xl pb-10'>
                            <div>
                                <h1>Signup as</h1>
                            </div>

                            <div className=''>
                                <input type="radio" 
                                name="hospital"
                                 id="hospitalId"
                                {...register("signup", { required: 'signup is required' })}
                                />Hospital
                            </div>

                            <div>
                                <input type="radio"
                                 name="mortuary"
                                  id="morgueId" 
                                {...register("signup", { required: 'signup is required' })}
                                />morgue
                            </div>
                        </div>

                    </div>


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
                        <label htmlFor="phoneNumber" className="block text-blue-950 font mb-2 text-2xl">Phone Number</label>
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
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}

                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}aria-live='assertive'>
                            Must match the first password input field.
                        </p>

                    </div>
                    <div className="pb-2 ml-[130px]">
                      <FilledButton  disabled={!validPassword || !validMatch ? true : false} onClick={handleLogin} text="Sign Up" style= {{width: "500px"}} type="submit"/>
                        <div className="text-sm flex gap-3">
                        <p className=" flex  gap-3 text-sm text-blue-950">
                            Already have an Account? <br/>    
                            <span className='line'>
                            <GhostButton text="Login" onClick={handleLogin}/>
                            </span>
                        </p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <div className='content px-32 pt-80'>
            <h1 className='text-white flex text-5xl'>
            Navigate Life's Journey with
             Precision - <br /> Capturing Every Moment, 
              Every Statistic, Every Insight!</h1>
              <p className='text-white pt-10 text-2xl'> We are a team of passionate individuals who believe in the power of data and its impact on society.
            Committed to providing the best tools and resources, we empower you to capture and analyze 
            your life's journey. By encapsulating every moment, statistic, and insight, we enable informed 
            decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, 
            eagerly anticipating our role in your story.</p>
        </div>
        </div>  
        </div>
    );
};

export default HospitalSignUpForm;
