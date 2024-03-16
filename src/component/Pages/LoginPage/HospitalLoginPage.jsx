import React from "react";
import {useRef, useState, useEffect, useContext } from "react";
import {useNavigate, Link } from "react-router-dom";
import GhostButton from '../../../reuseables/bottons/GhostButton/GhostButton'
import nurse from '../../../assets/african-doctor-portrait_93675-75219.avif'
import logo from '../../../assets/VitalLogo.jpeg'



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
                navigate("/birthlayout/register-birth")
            }
        
        } catch (error) {
            console.error('Error:', error);
            setErrMsg("Incorrect Password");
        }

    }
    

  return (
    <div className="flex bg-blue-900 relative">
      <div className='mx-96  center imageDiv'>
        <img className='h-screen justify-center flex image' src={nurse} alt="" />
      </div>


      <div className="flex flex-col justify-center items-center px-20 py-8 gap-8 loginDiv">

        <div className=" w-[580px] px-14 h-[800px] pt-10 border border-white-1 rounded-lg">
        <div className="flex px-20 pb-30 justify-center">
            <img src={logo} alt=""/>
          </div>
          <h1 className="text-3xl font-extrabold justify-center pt-10 center flex  text-white">HOSPITAL LOGIN</h1>
          <p ref={errRef} className={`${errMsg ? 'errmsg text-white text-2xl center flex justify-center' : 'offscreen'}`} aria-live='assertive'>{errMsg}</p>

            <form onSubmit={handleSubmit}>
              <div className="flex pt-8 flex-col gap-5"> 
              <label htmlFor='username' className="text-white text-2xl">Email</label>
              <input className="w-[470px] px-5 rounded-lg h-9"
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
              <button className ='bg-blue-400 py-3 border-radius text-[20px] text-white font-family:   Georgia Cambria "Times New Roman" Times
         serif line-height: 1.5rem; rounded-2xl
                            btn' text="Login" style={{width:"470px"}} type="submit" >Login</button>
              </div>
            </form>
            <p className="flex flex-row gap-4 pt-5 text-white">
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
