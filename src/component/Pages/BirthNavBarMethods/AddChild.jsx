import React, { useState, useEffect } from 'react';

const AddChild = () => {
  const [stateData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await fetch('https://nigeria-states-towns-lga.onrender.com/api/all');
        if (!response.ok) {
          throw new Error('Failed to fetch state data');
        }
        const data = await response.json();
        setStateData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching state data:', error);
        setLoading(false);
      }
    };

    fetchStateData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>State Data</h2>
      <ul>
        {stateData.map((state) => (
          <li key={state.state}>{state.state}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddChild;
