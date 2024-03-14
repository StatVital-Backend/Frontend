import React, { useState, useEffect } from 'react';
import RegisterChildBirth from '../../Admin/RegisterChidBirth';

function ViewAll() {
  const [RegisterChildBirth, setRegisterChildBirth] = useState([]);
  const [deathRegistrations, setDeathRegistrations] = useState([]);

  useEffect(() => {
    
    fetchBirthUsers();
    fetchDeathRegistrations();
  }, []);

  const fetchBirthUsers = async () => {
    try {
      const response = await fetch('localhost:8080/api/v1/admin');
      const data = await response.json();
      setBirthUsers(data);
    } catch (error) {
      console.error('Error fetching birth users:', error);
    }
  };

  const fetchDeathRegistrations = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT/death-registrations');
      const data = await response.json();
      setDeathRegistrations(data);
    } catch (error) {
      console.error('Error fetching death registrations:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-blue 400 font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Birth Registrations</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">ID</th>
              <th className="border border-gray-200 p-2">Sex</th>
              <th className="border border-gray-200 p-2">Email</th>
              <th className="border border-gray-200 p-2">Phone Number</th>
              <th className="border border-gray-200 p-2">Location/State of Registration</th>
              <th className="border border-gray-200 p-2">Date and Time Registered</th>


            </tr>
          </thead>
          <tbody>
            {RegisterChildBirth.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-200 p-2">{registration.id}</td>   
                <td className="border border-gray-200 p-2">{registration.sex}</td>
                <td className="border border-gray-200 p-2">{registration.email}</td>
                <td className="border border-gray-200 p-2">{registration.phoneNumber}</td>
                <td className="border border-gray-200 p-2">{registration.location}</td>
                <td className="border border-gray-200 p-2">{registration.dateTimeRegistered}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Death Registrations</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">ID</th>
              <th className="border border-gray-200 p-2">Sex</th>
              <th className="border border-gray-200 p-2">Email</th>
              <th className="border border-gray-200 p-2">Phone Number</th>
              <th className="border border-gray-200 p-2">Location/State of Registration</th>
              <th className="border border-gray-200 p-2">Date and Time Registered</th>
            </tr>
          </thead>
          <tbody>
            {deathRegistrations.map((registration) => (
              <tr key={registration.id}>
                <td className="border border-gray-200 p-2">{registration.id}</td>   
                <td className="border border-gray-200 p-2">{registration.sex}</td>
                <td className="border border-gray-200 p-2">{registration.email}</td>
                <td className="border border-gray-200 p-2">{registration.phoneNumber}</td>
                <td className="border border-gray-200 p-2">{registration.location}</td>
                <td className="border border-gray-200 p-2">{registration.dateTimeRegistered}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAll;
