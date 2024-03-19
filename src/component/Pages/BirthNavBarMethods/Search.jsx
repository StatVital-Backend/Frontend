import React, { useState } from 'react';

const Search = () => {
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

        
        const searchFunction = async (e) => {
            const input = document.getElementById("myInput").value;
            // document.getElementById("output").innerText = input;
            // console.log('this is the response... ');
            
            try {
                const response = await fetch(`https://tops-chimp-promoted.ngrok-free.app/api/v1/search`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(input)
                    });
                    // console.log(response);
                    if (response.ok) {
                        const data = await response.json();
                        document.getElementById("output").innerText = data.name; 
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
        <input type="text"id="myInput" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name..." required />
        <button type="submit"  onClick={searchFunction} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>    
    <div id="output"></div>
</form>

  );
}

export default Search;
