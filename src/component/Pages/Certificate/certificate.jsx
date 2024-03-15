import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const Certificate = () => {
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await axios.post('https://tops-chimp-promoted.ngrok-free.app/api/v1/');
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); 
  }, []); 

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-5">Certificate of Registration</h1>
        {userData ? (
          <div>
            <p><span className="font-semibold">User ID:</span> {userData.uniqueId}</p>
            <p><span className="font-semibold">Father's Full Name:</span> {userData.fatherFullName}</p>
            <p><span className="font-semibold">Mother's Full Name:</span> {userData.motherFullName}</p>
            <p><span className="font-semibold">Child's Full Name:</span> {userData.childFullName}</p>
            <p><span className="font-semibold">State of Origin:</span> {userData.stateOfOrigin}</p>
            <p><span className="font-semibold">Sex:</span> {userData.sex}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Certificate;
