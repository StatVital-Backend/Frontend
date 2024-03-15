import React from 'react';

const DeathRegSuccessful = ({ data }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Deceased Name: {data.deceasedName}</p>
            <p>Time of Death: {data.timeOfDeath}</p>
            <p>Date of Death: {data.dateOfDeath}</p>
            <p>Cause of Death: {data.causeOfDeath}</p>
            <p>Brought by: {data.broughtBy}</p>
            <p>Medical History: {data.medicalHistory}</p>
          </div>
          <div>
            <p>Receiver: {data.receiver}</p>
            <p>Place of Death: {data.placeOfDeath}</p>
            <p>Deceased Residence: {data.deceasedResidence}</p>
            <p>Age: {data.age}</p>
            <p>Gender: {data.gender}</p>
            <p>Marital Status: {data.maritalStatus}</p>
            <p>Occupation: {data.occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeathRegSuccessful;
