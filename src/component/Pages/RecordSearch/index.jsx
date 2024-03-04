import React, { useState } from 'react';

const RecordSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name');

    const handleSearch = () => {
        onSearch({ type: searchType, query: searchQuery });
    };

    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Search Records</h2>
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
                    className="input-style flex-grow mr-4"
                />
                <button onClick={handleSearch} className="button-style">Search</button>
            </div>
        </div>
    );
};

export default RecordSearch;
