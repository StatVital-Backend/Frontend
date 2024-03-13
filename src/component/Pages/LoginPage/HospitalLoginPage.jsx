import React from "react";
import {useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../AuthProvider";
import {useNavigate } from "react-router-dom";
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton'
import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton'
import nurse from '../../../assets/african-doctor-portrait_93675-75219.avif'
import logo from '../../../assets/VitalLogo.jpeg'


const PWD_REGEX = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:`.,/'|"<>?])(?=.*[0-9]).{8,}$/;


const HospitalLoginPage = () => {
    const navigate = useNavigate();

    const {setAuth} = useContext(AuthContext );

    const handleSignUp = () => {
      navigate('/hospitalsignup')
    }

    const handleHospitalDashBoard = () => {
      navigate('/birthlayout/registerbirth')
    }

    const userRef = useRef();
    const errRef = useRef();
  
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
  
  
    useEffect (()=> {
      userRef.current.focus()
  }, []) 
  
    useEffect (()=> {
      setErrMsg('')
    }, [email, password]);
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      const v2 = PWD_REGEX.test(password);
      if (!v2) {
          setErrMsg("Invalid Entry");
          return;
      }

      const HospitalLogin = {
        facilityName: email,
        password: password,
    };
  
      fetch('https://619e-62-173-45-238.ngrok-free.app/api/v1/logInHospital', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body:JSON.stringify(HospitalLogin)
        })
        .then(response => response.json())
        .then(data => {
        console.log(data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
  
    
    }

    

  return (
    <div className="flex bg-blue-900 relative">
      <div className='mx-96  center imageDiv'>
        <img className='h-screen justify-center flex image' src={nurse} alt="" />
      </div>


      <div className="flex flex-col justify-center items-center px-20 py-8 gap-8 loginDiv">

        <div className=" w-[580px] px-14 h-[700px] pt-8 border border-white-1 rounded-lg">
        <div className="flex px-20 pb-30 justify-center">
            <img src={logo} alt=""/>
          </div>
          <h1 className="text-4xl font-extrabold justify-center pt-10 center flex  text-white">LOGIN</h1>
          <p ref={errRef} className={`${errMsg ? 'errmsg text-white text-2xl center flex justify-center' : 'offscreen'}`} aria-live='assertive'>{errMsg}</p>

            <form on onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5"> 
              <label htmlFor='username' className="text-white text-2xl">Email</label>
              <input className="w-[470px] px-5 rounded-lg h-9"
              type='email' 
              id='email'
              // onFocus={() =il(true)}
              // onBlur={() => email(fal> emase)}
              placeholder="@hospital.com"
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setemail(e.target.value)}
              value={email}
              required
              />
            

            
              <label htmlFor='password' className="gap-10 flex text-white text-2xl">Password</label>
              <input className="w-[470px] px-5 h-9 rounded-lg"
              type='password' 
              id='password'
              placeholder="................"
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              />

            </div>  
              <div className="pt-8">
              <FilledButton text="Login" style={{width:"470px"}} onClick={handleHospitalDashBoard}/>
              </div>
            </form>
            <p className="flex flex-row gap-4 pt-5 text-white">
              Need an Account? <br/>    
              <span className='line'>
               <GhostButton text="Sign up" onClick={handleSignUp}/>
              </span>
            </p>
          </div>
        </div>
          
    </div>
    )
};

export default HospitalLoginPage;
