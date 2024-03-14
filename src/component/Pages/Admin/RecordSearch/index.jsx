import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilledButton from '../../../../reuseables/bottons/FilledButton/FilledButton';
import rectangle from '../../../../assets/Question.png';
import dot1 from '../../../../assets/faqq.png';
import dot2 from '../../../../assets/dfg 2 (1).png';

const RecordSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name');

    const handleSearch = () => {
        onSearch({ type: searchType, query: searchQuery });
    };

    return (
        <>
        <div className=''> 

        <div className='justify-between px-56 pt-10 flex  mainContainer'>
            <div className=' '>
                <h1 className='text-blue-400 text-3xl pt-5'>STATVITAL</h1>
            </div>
            <div className='pt-4 '>
            <div className="flex flex-col items-center mb-4">
            <h2 className="text-lg text-blue 400 text-3xl font-semibold mb-2">Search Records</h2>
            <div className="flex items-center mb-4">
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="select-style mr-4"
                >
                    <option value="name">Name</option>
                    <option value="dob">Date of Birth</option>
                    <option value="uniqueId">Unique ID Number</option>
                </select>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Enter ${searchType === 'dob' ? 'date of birth' : searchType}...`}
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    />
                <button onClick={handleSearch} className="button-style">Search</button>
            </div>
        </div>
            </div> 
  
            <div className=' pt-5'>
            <Link to="/deathLayout/registerDeath">
            <button className="rounded-full bg-blue-400 p-4 flex items-center justify-center">
              <span className="ml-2 text-[24px] text-white">+ Register Death</span>
            </button> 
            </Link>
            </div>
        </div>  
  
        <div className=' justify-center pt-6 flex gap-4 mainContainer'>
            <div className=' pt- 20 addChild'>
             <Link to="/birthlayout/registerbirth"><FilledButton text="Add" style={{width: "200px", height: 86}}/> </Link> 
            </div>
  
            <div className=' pt- 20 addChild'>
            <Link to="/birthlayout/viewAll">
              <FilledButton text="View All" style={{width: "200px", height: 86}}/>
            </Link>
            </div>
  
            {/* <div className=' pt- 20 addChild'>
              <FilledButton text="Update" style={{width: "200px", height: 86}}/>
            </div> */}
  
            <div className=' pt- 20 addChild'>
              <Link to={`/admin/delete`}> <FilledButton text="Update" style={{width: "200px", height: 86}}/> </Link>
            </div>
  
            <div className=' pt- 20 updateBirthInfo'>
            <Link to="/birthlayout/postnatalupdate"> <FilledButton text="Post Natal Update" style={{width: "200px", height: 86}}/>
            </Link>
            </div>
  
            <div className=' pt- 20 postPartumUpdate'>
              <FilledButton text="Post Partum Update" style={{width: "200px", height: 86}}/>
            </div>
  
        </div>
        <h1 className='text-4xl justify-center center flex text-blue-950 '></h1>
        <div className='pt-6'>
        <div className="flex relative">
          <img src={rectangle} alt="Black Image" className="pl-[400px] w-[2000px] " />
          <p className='text-4xl z-10 text-white relative right-[750px] top-6'>Birth Registration DashBoard</p>
  
  
          <div className='absolute justify-start top-2 left-[400px]'>
            <img src={dot1} alt="" className='' />
          </div >
  
          <div className='absolute top-2 right-[400px] '>
            <img src={dot2} alt="" />
          </div >
          </div>
        </div>
  
        <h2 className="text-4xl text-blue-950 font-semibold mb-4 pt-8 justify-center center flex uppercase">WELCOME TO KINGS' COURT HOSPITAL</h2>
  
      </div>
        
        </>
    );
};

export default RecordSearch;
