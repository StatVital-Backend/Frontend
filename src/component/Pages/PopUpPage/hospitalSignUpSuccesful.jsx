import React from 'react';

const HospitalSignUpSuccessful = ({ data }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <div>
          <p>Facility Name: {data.facilityName}</p>
          <p>Facility Location: {data.facilityLocation}</p>
          <p>Facility Type: {data.facilityType}</p>
          <p>Certification Number: {data.certfificationNumber}</p>
          <p>Official Email: {data.officialEmail}</p>
          <p>Phone Number: {data.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalSignUpSuccessful;