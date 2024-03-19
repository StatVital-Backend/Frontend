import React, { useState, useEffect } from 'react';

function ViewAll() {
  const [RegisterChildBirth, setRegisterChildBirth] = useState([]);
  const [birthUsers, setBirthUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://tops-chimp-promoted.ngrok-free.app/api/v1/getfulldata';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({data: " "})
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setBirthUsers(jsonData.data);
      } catch (error) {
        console.log(`error from above ${error}`);
      }
    };

    fetchData(); 
  }, []);

  // const fetchBirthUsers = async () => {
  //   try {
  //     fetch('https://tops-chimp-promoted.ngrok-free.app/api/v1/GetData', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     }).then(res => {
  //       console.log(res.json());
  //       // return res.json()
  //     })
  //     // .then( data => {
  //     //   console.log(data);
  //     //   setBirthUsers(data.data);

  //     // })

  //   } catch (error) {
  //     console.log(error.message)
  //     console.error('Error fetching birth users:', error);
  //   }
  // };


  return (
    <div className='pt-1 0'> 
      <div className="container mx-auto p-1 bg-blue-400">
        <div className="mb-8 ">
          <h2 className="text-5xl font-semibold mb-2 justify-center flex center text-white">Birth Registrations</h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">Name</th>
                <th className="border border-gray-200 p-2">Sex</th>
                <th className="border border-gray-200 p-2">Father's Name</th>
                <th className="border border-gray-200 p-2">Mother's Full-Name</th>
                <th className="border border-gray-200 p-2">refrence Id</th> 
                {/* <th className="border border-gray-200 p-2">Id</th> */}
                <th className="border border-gray-200 p-2">dob</th>
                <th className="border border-gray-200 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {birthUsers.map((item) => (
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.fatherName}</td>
                <td>{item.motherName}</td>
                <td>{item.referenceId}</td>
                <td>{item.dob}</td>
                <td>{item.sex}</td>
                <td>{item.isDead}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
