import React, { useState } from 'react';

const DeathRegistrationForm = () => {
    const [deceasedName, setDeceasedName] = useState('');
    const [timeOfDeath, setTimeOfDeath] = useState('');
    const [dateOfDeath, setDateOfDeath] = useState('');
    const [causeOfDeath, setCauseOfDeath] = useState('');
    const [broughtBy, setBroughtBy] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [receiver, setReceiver] = useState('');
    const [placeOfDeath, setPlaceOfDeath] = useState('');
    const [deceasedResidence, setDeceasedResidence] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Death Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="deceasedName" className="block text-gray-700 font-bold mb-2">Deceased Name</label>
                        <input
                            id="deceasedName"
                            type="text"
                            value={deceasedName}
                            onChange={(e) => setDeceasedName(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="timeOfDeath" className="block text-gray-700 font-bold mb-2">Time of Death</label>
                        <input
                            id="timeOfDeath"
                            type="time"
                            value={timeOfDeath}
                            onChange={(e) => setTimeOfDeath(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfDeath" className="block text-gray-700 font-bold mb-2">Date of Death</label>
                        <input
                            id="dateOfDeath"
                            type="date"
                            value={dateOfDeath}
                            onChange={(e) => setDateOfDeath(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="causeOfDeath" className="block text-gray-700 font-bold mb-2">Cause of Death</label>
                        <input
                            id="causeOfDeath"
                            type="text"
                            value={causeOfDeath}
                            onChange={(e) => setCauseOfDeath(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="broughtBy" className="block text-gray-700 font-bold mb-2">Brought By</label>
                        <input
                            id="broughtBy"
                            type="text"
                            value={broughtBy}
                            onChange={(e) => setBroughtBy(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="medicalHistory" className="block text-gray-700 font-bold mb-2">Medical History</label>
                        <textarea
                            id="medicalHistory"
                            value={medicalHistory}
                            onChange={(e) => setMedicalHistory(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="receiver" className="block text-gray-700 font-bold mb-2">Receiver</label>
                        <input
                            id="receiver"
                            type="text"
                            value={receiver}
                            onChange={(e) => setReceiver(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="placeOfDeath" className="block text-gray-700 font-bold mb-2">Place of Death</label>
                        <input
                            id="placeOfDeath"
                            type="text"
                            value={placeOfDeath}
                            onChange={(e) => setPlaceOfDeath(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="deceasedResidence" className="block text-gray-700 font-bold mb-2">Deceased Residence</label>
                        <input
                            id="deceasedResidence"
                            type="text"
                            value={deceasedResidence}
                            onChange={(e) => setDeceasedResidence(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="input-style"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="maritalStatus" className="block text-gray-700 font-bold mb-2">Marital Status</label>
                        <select
                            id="maritalStatus"
                            value={maritalStatus}
                            onChange={(e) => setMaritalStatus(e.target.value)}
                            className="input-style"
                            required
                        >
                            <option value="">Select Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="occupation" className="block text-gray-700 font-bold mb-2">Occupation</label>
                        <input
                            id="occupation"
                            type="text"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="button-style">Register Death</button>
            </form>
        </div>
    );
};

export default DeathRegistrationForm;
