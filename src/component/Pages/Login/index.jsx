import React from 'react';
import { Link } from "react-router-dom";
import pics from '../../../assets/smilingOfficeLady.webp'
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';


const LoginPage = () => {
    return (
        <div className='mainContainer'>
            <div className='bg-blue-950 flex divy'>
                <div className='w-3/5 imgDiv'>
                    <img className='h-screen' src={pics} alt="" />
                </div>  

                <div>
                    <div className='bg-white form'>
                        
                    </div>
                </div>

                
                    

            </div>

        </div>
    );
};

export default LoginPage;
