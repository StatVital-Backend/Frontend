import React from 'react';
import markus from '../../assets/glowing-blue-pulse-trace-computer-monitor-symbolizes-healthy-heartbeat-generated-by-ai_188544-56200.jpg'
import { Link } from 'react-router-dom';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';


const Hero = () => {
  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-950 leading-tight font-medium">
            Navigate Life's Journey with Precision - Capturing Every Moment, Every Statistic, Every Insight!
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            We are a team of passionate individuals who believe in the power of data and its impact on society. 
            Committed to providing the best tools and resources, we empower you to capture and analyze your life's journey. By encapsulating every moment, statistic, and insight,
             we enable informed decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, eagerly anticipating our role in your story.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
         <Link to="/signup"><FilledButton text={"Get Started"} style={{width: '130px'}}/></Link> 
           {/* <Link to="/signup"> <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-400 text-blue-900 border-2 border-blue-400">
              Get Started
            </button> </Link> */}
            <button className="mt-4 sm:mt-0 sm:w-40 px-4 py-3 text-md text-blue-400">
              Read More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={markus} alt="chart representation" />
        </div>
      </div>
    </div>
  );
};

export default Hero;





// import React, { useEffect } from 'react';
// import markus from '../../assets/glowing-blue-pulse-trace-computer-monitor-symbolizes-healthy-heartbeat-generated-by-ai_188544-56200.jpg';
// import { Link } from 'react-router-dom';
// import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
// import Chart from 'chart.js/' // Import Chart.js

// const Hero = () => {
//     useEffect(() => {
//         var ctx = document.getElementById('myChart').getContext('2d');
//         var chart = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                 datasets: [{
//                     label: 'Births per month',
//                     data: [12, 19, 3, 5, 2, 3, 14],
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
//         });
//     }, []);

//     return (
//         <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
//             <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
//                 <div className="w-full md:w-1/2 lg:pr-32">
//                     {/* Your existing content */}
//                     <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-950 leading-tight font-medium">
//                         Navigate Life's Journey with Precision - Capturing Every Moment, Every Statistic, Every Insight!
//                     </h2>
//                     <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
//                         We are a team of passionate individuals who believe in the power of data and its impact on society.
//                         Committed to providing the best tools and resources, we empower you to capture and analyze your life's journey. By encapsulating every moment, statistic, and insight,
//                         we enable informed decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, eagerly anticipating our role in your story.
//                     </h3>
//                     <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
//                         <Link to="/signup"><FilledButton text={"Get Started"} style={{ width: '130px' }} /></Link>
//                         {/* <Link to="/signup"> <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-400 text-blue-900 border-2 border-blue-400">
//               Get Started
//             </button> </Link> */}
//                         <button className="mt-4 sm:mt-0 sm:w-40 px-4 py-3 text-md text-blue-400">
//                             Read More
//                         </button>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//                     {/* Your existing image */}
//                     <img src={markus} alt="chart representation" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
