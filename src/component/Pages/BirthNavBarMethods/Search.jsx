import React, { useState } from 'react';

const Search = () => {
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [userData, setUserData] = useState([])

        
        const searchFunction = async (e) => {
            e.preventDefault();
            const input = document.getElementById("myInput").value;
            console.log(input);

            
            try {
                const response = await fetch(`https://tops-chimp-promoted.ngrok-free.app/api/v1/search`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: input})
                    });

                    if (response.ok) {
                        console.log('this is the response... ');
                        const data = await response.json();
                        console.log(data)
                        setUserData(data);
                    } else {
                        document.getElementById("output").innerText = "Not found"; 
                    }
                } catch (error) {
                    console.log('Error', error);
                    document.getElementById("output").innerText = "Not found"; 
                }
        }
    return (
        <form className="max-w-md pt-40 mx-auto">

            <label htmlFor="default-search" className="text-2xl text-blue-950 justify-center center flex uppercase">SEARCH FOR REGISTERED CHILD</label>

            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="myInput" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name..." required />
                <button type="submit" onClick={searchFunction} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <div id="output"></div>
            <div className="container mx-auto">
                <DataCards data={userData} />
            </div>
            {errMsg && <div className="text-red-500">{errMsg}</div>}
            {successMsg && <div className="text-green-500">{successMsg}</div>}
        </form>
    );
}

const Card = ({ name, age, dob, fatherName, motherName, sex }) => {
    return (
        <div className="bg-white mr-12 shadow-md rounded-lg p-6 mb-4 w-[250px] ">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p>Age: {age || 'Unknown'}</p>
            <p>Date of Birth: {dob}</p>
            <p>Father's Name: {fatherName}</p>
            <p>Mother's Name: {motherName}</p>
            <p>Sex: {sex}</p>
        </div>                  
    );
};

const DataCards = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-72">
            {data.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
};

export default Search;
