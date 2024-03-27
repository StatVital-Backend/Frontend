import React from "react";
import {useRef, useState, useEffect, useContext } from "react";
import {useNavigate, Link } from "react-router-dom";
import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton'
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton'
import nurse from '../../../assets/african-doctor-portrait_93675-75219.avif'
import logo from '../../../assets/VitalLogo.jpeg'
import FilledButton from "../../../reuseables/bottons/FilledButton/FilledButton";



    const HospitalLoginPage = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('')
   
  
  
    useEffect (()=> {
      userRef.current.focus()
    }, []) 
  
    useEffect (()=> {
      setErrMsg('')
    }, [email, password]);

  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      const obj = {
        email: email,
        password: password
      }

      try {
        const response = await fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/logInHospital", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });        
        if (response.ok) {
            const data = await response.json();
                setErrMsg(data.message)
                console.log(data);
                setTimeout(()=>{
                    setSuccessMsg(data.message);
                }, 1500);
                navigate("/birthlayout/registerBirthAndAdd")
            }
        
        } catch (error) {
            console.error('Error:', error);
            setErrMsg("Incorrect Password");
        }

    }
    

  return (
    <div className="flex flex-row bg-blue-900 justify-around">
      <div className='imageDiv'>
        <img className='h-screen hidden sm:block' src={nurse} alt="" />
      </div>

      <div className="flex items-center py-8 loginDiv">

        <div className=" w-full px-14 h-[800px] pt-10 border border-white-1 rounded-lg">
        <div className="flex justify-center center">
            <img src={logo} alt=""/>
          </div>
          <h1 className="text-3xl font-extrabold justify-center pt-10 center flex  text-white">HOSPITAL LOGIN</h1>
          <p ref={errRef} className={`${errMsg ? 'errmsg text-white text-2xl center flex justify-center' : 'offscreen'}`} aria-live='assertive'>{errMsg}</p>

            <form onSubmit={handleSubmit}>
              <div className="flex pt-8 items-center justify-center center flex-col gap-5"> 
                <label htmlFor='username' className="text-white text-2xl">Email</label>
                <input className="w-full px-5 text-2xl rounded-lg h-9"
                type='email' 
                id='email'
                placeholder="hospital@email.com"
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setemail(e.target.value)}
                value={email}
                required
                />
              
      
              
                <label htmlFor='password' className="gap-10 flex text-white text-2xl">Password</label>
                <input className="w-full px-5 h-9 pb-3 text-2xl rounded-lg"
                type='password' 
                id='password'
                placeholder="................"
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
              </div>  

              <div className="pt-8 grid items-center justify-center">
                <FilledButton text={"Login"} style={{width:"280px"}} />
              </div>
            </form>
            <p className="flex flex-row gap-4 pt-5 justify-center text-white">
              Need an Account? <br/>    
              <span className='line'>
                <Link to="/hospitalsignup"><GhostButton text="Sign up"/> </Link> 
              </span>
            </p>
          </div>
        </div>
          
    </div>
    )
};

export default HospitalLoginPage;
