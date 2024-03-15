import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilledButton from '../../../../reuseables/bottons/FilledButton/FilledButton';
import rectangle from '../../../../assets/Question.png';
import dot1 from '../../../../assets/faqq.png';
import dot2 from '../../../../assets/dfg 2 (1).png';

const RecordSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        fetch('https://tops-chimp-promoted.ngrok-free.app/api/v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: searchType,
                query: searchQuery
            })
        })
        .then(response => response.json())
        .then(data => {
            setSearchResult(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setLoading(false);
        });
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
                                <button onClick={handleSearch} className="button-style" disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
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
            </div> 
        </>
    );
}

export default RecordSearch;
