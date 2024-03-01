import React from 'react';
import chris from '../../assets/chris.jpg';

const Home = () => {
  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
            Navigate Life's Journey with Precision - Capturing Every Moment, Every Statistic, Every Insight!
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            We are a team of passionate individuals who believe in the power of data and its impact on society. 
            Committed to providing the best tools and resources, we empower you to capture and analyze your life's journey. By encapsulating every moment, statistic, and insight,
             we enable informed decisions and a more fulfilling life. We're devoted to guiding you through life's journey with precision, eagerly anticipating our role in your story.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
              Get Started
            </button>
            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
              Read More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={chris} alt="chart representation" />
        </div>
      </div>
    </div>
  );
};

export default Home;
