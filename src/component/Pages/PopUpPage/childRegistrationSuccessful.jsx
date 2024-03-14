import React from 'react';

const ChildRegistrationSuccessful = ({ data }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Birth Registration Successful!</h2>
        <div>
          <p>Nurse Name: {data.nurseName}</p>
          <p>Father Full Name: {data.fatherFullName}</p>
          <p>Mother FUll Name: {data.motherFullName}</p>
          <p>Child's Full Name: {data.childFullName}</p>
          <p>State Of Origin: {data.stateOfOrigin}</p>
          <p>Sex: {data.sex}</p>
        </div>
      </div>
    </div>
  );
};

export default ChildRegistrationSuccessful;