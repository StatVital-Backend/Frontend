
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import Chart from 'chart.js/auto';
const Hero = () => {
    useEffect(() => {
        const canvas = document.getElementById('vital-chart');

        const ctx = canvas.getContext('2d');
        const vitalChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'B-B-M',
                    data: [12, 19, 3, 5, 2, 3, 14],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);


    return (
        <div className="flex pt-12 px-30 items-center justify-center bg-hero">
            <div className="flex px-20 gap-6 items-center max-w-8xl">
                <div className="w-full md:w-1/2">
                    <h2 className="text-5xl text-center md:text-left text-blue-950 leading-tight font-medium">
                        Navigate Life's Journey with Precision - Capturing Every Moment, Every Statistic, Every Insight!
                    </h2>
                    <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                        We are a team of passionate individuals who believe in the power of data and its impact on society.
                        Committed to providing the best tools and resources, we empower you to capture and analyze your life's journey. By encapsulating every moment, statistic, and insight,
                        we enable informed decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, eagerly anticipating our role in your story.
                    </h3>
                    <div className="mt-10 grid-flow-col flex gap-10">
                        <Link to="/hospitalsignup"><FilledButton text={"SignUp as Hospital"} style={{ width: '200px' }} /></Link>

                       <Link to="/mortuarysignup"><FilledButton text={"SignUp as Mortuary"} style={{width: '200px'}}>SignUp as Mortuary</FilledButton> </Link> 
                       
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <canvas id="vital-chart" width="400" height="400" className='hidden sm:block'></canvas>
                </div>
            </div>
        </div>
    );
};

export default Hero;
