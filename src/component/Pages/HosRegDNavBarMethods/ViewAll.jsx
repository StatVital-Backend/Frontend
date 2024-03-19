import React, { useState, useEffect } from 'react';

function HosViewAll() {
  const [deathRegistrations, setDeathRegistrations] = useState([]);

  useEffect(() => {
    fetchDeathRegistrations();
  }, []);

  const fetchDeathRegistrations = async () => {
    try {
      const response = await fetch('https://tops-chimp-promoted.ngrok-free.app/api/v1/death');
      const data = await response.json();
      setDeathRegistrations(data);
    } catch (error) {
      console.error('Error fetching death registrations:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-blue-950">
      <div>
        <h2 className="text-5xl font-semibold mb-2 justify-center text-blue-950 center flex ">Death Registrations Table</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">Deceased Name</th>
              <th className="border border-gray-200 p-2">Surname</th>
              <th className="border border-gray-200 p-2">Age</th>
              <th className="border border-gray-200 p-2">Brought By</th>
              <th className="border border-gray-200 p-2">Cause Of Death</th>
              <th className="border border-gray-200 p-2">RefrenceId</th>
              <th className="border border-gray-200 p-2">Date of Death</th>
            </tr>
          </thead>
          <tbody>
            {deathRegistrations.map((registration) => (
              <tr key={registration.id}>
                <td className="border border-gray-200 p-2">{registration.DeceasedName}</td>   
                <td className="border border-gray-200 p-2">{registration.Surname}</td>
                <td className="border border-gray-200 p-2">{registration.Age}</td>
                <td className="border border-gray-200 p-2">{registration.BroughtBy}</td>
                <td className="border border-gray-200 p-2">{registration.CauseOfDeath}</td>
                <td className="border border-gray-200 p-2">{registration.DateofDeath}</td>
                <td className="border border-gray-200 p-2">{registration.DateOfDeath}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HosViewAll;
