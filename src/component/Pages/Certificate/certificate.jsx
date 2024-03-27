// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 

// const Certificate = () => {
//   const [userData, setUserData] = useState(null); 

//   useEffect(() => {
    
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.post('https://tops-chimp-promoted.ngrok-free.app/api/v1/');
//         setUserData(response.data); 
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData(); 
//   }, []); 

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold mb-5">Certificate of Registration</h1>
//         {userData ? (
//           <div>
//             <p><span className="font-semibold">User ID:</span> {userData.uniqueId}</p>
//             <p><span className="font-semibold">Father's Full Name:</span> {userData.fatherFullName}</p>
//             <p><span className="font-semibold">Mother's Full Name:</span> {userData.motherFullName}</p>
//             <p><span className="font-semibold">Child's Full Name:</span> {userData.childFullName}</p>
//             <p><span className="font-semibold">State of Origin:</span> {userData.stateOfOrigin}</p>
//             <p><span className="font-semibold">Sex:</span> {userData.sex}</p>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Certificate;

import React from 'react';

const Certificate = ({ data }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-4xl font-bold mb-6">Certificate of Registration</h2>
            <div className="bg-white p-6 rounded-lg shadow-md w-[600px]">
                <p><span className="font-semibold">Deceased Name:</span> {data.deceasedName}</p>
                <p><span className="font-semibold">Time of Death:</span> {data.timeOfDeath}</p>
                <p><span className="font-semibold">Date of Death:</span> {data.dateOfDeath}</p>
                <p><span className="font-semibold">Cause of Death:</span> {data.causeOfDeath}</p>
                <p><span className="font-semibold">Brought By:</span> {data.broughtby}</p>
                <p><span className="font-semibold">Mortician:</span> {data.mortician}</p>
                <p><span className="font-semibold">Place of Death:</span> {data.placeOfDeath}</p>
                <p><span className="font-semibold">Deceased Residence:</span> {data.deceasedResidence}</p>
                <p><span className="font-semibold">State of Origin:</span> {data.stateOfOrigin}</p>
                <p><span className="font-semibold">Local Government Area:</span> {data.lg}</p>
                <p><span className="font-semibold">Age:</span> {data.age}</p>
                <p><span className="font-semibold">Gender:</span> {data.gender}</p>
            </div>
        </div>
    );
};

export default Certificate;

