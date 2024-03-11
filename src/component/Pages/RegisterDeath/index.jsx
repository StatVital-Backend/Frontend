
// const DeathRegistrationForm = () => {
//     const [deceasedName, setDeceasedName] = useState('');
//     const [timeOfDeath, setTimeOfDeath] = useState('');
//     const [dateOfDeath, setDateOfDeath] = useState('');
//     const [causeOfDeath, setCauseOfDeath] = useState('');
//     const [broughtBy, setBroughtBy] = useState('');
//     const [medicalHistory, setMedicalHistory] = useState('');
//     const [receiver, setReceiver] = useState('');
//     const [placeOfDeath, setPlaceOfDeath] = useState('');
//     const [deceasedResidence, setDeceasedResidence] = useState('');
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('');
//     const [maritalStatus, setMaritalStatus] = useState('');
//     const [occupation, setOccupation] = useState('');

import React, { useState } from 'react';
import backgroundImage from '../../../assets/clean-medical-background_53876-97927.jpg';

const DeathRegistrationForm = () => {
    const [deceasedFullName, setDeceasedFullName] = useState('');
    const [deceasedAge, setDeceasedAge] = useState('');
    const [gender, setGender] = useState('');
    const [deathDateTime, setDeathDateTime] = useState('');
    const [placeOfDeath, setPlaceOfDeath] = useState('');
    const [causeOfDeath, setCauseOfDeath] = useState('');
    const [informantName, setInformantName] = useState('');
    const [informantRelationship, setInformantRelationship] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [deceasedResidence, setDeceasedResidence] = useState('');
    const [occupation, setOccupation] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="flex justify-center items-center h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>        
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white rounded-sm p-6 text-center">
                    <h2 className="text-5xl text-blue-800 font-semibold mb-4 uppercase">Death Registration Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="deceasedFullName" className="block text-blue-900 font-bold mb-2 text-3xl">Deceased Full Name</label>
                            <input
                                id="deceasedFullName"
                                type="text"
                                value={deceasedFullName}
                                onChange={(e) => setDeceasedFullName(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased full name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deceasedAge" className="block text-blue-900 font-bold mb-2 text-3xl">Deceased Age</label>
                            <input
                                id="deceasedAge"
                                type="number"
                                value={deceasedAge}
                                onChange={(e) => setDeceasedAge(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased age"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-blue-900 font-bold mb-2 text-3xl">Deceased Age</label>
                            <input
                                id="gender"
                                type="text"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased gender"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deathDateTime" className="block text-blue-900 font-bold mb-2 text-3xl">Date and Time of Death</label>
                            <input
                                id="deathDateTime"
                                type="datetime-local"
                                value={deathDateTime}
                                onChange={(e) => setDeathDateTime(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter date and time of death"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="placeOfDeath" className="block text-blue-900 font-bold mb-2 text-3xl">Place of Death</label>
                            <input
                                id="placeOfDeath"
                                type="text"
                                value={placeOfDeath}
                                onChange={(e) => setPlaceOfDeath(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter place of death"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="causeOfDeath" className="block text-blue-900 font-bold mb-2 text-3xl">Cause of Death</label>
                            <input
                                id="causeOfDeath"
                                type="text"
                                value={causeOfDeath}
                                onChange={(e) => setCauseOfDeath(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter cause of death"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="informantName" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Name</label>
                            <input
                                id="informantName"
                                type="text"
                                value={informantName}
                                onChange={(e) => setInformantName(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter informant's name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="informantRelationship" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Relationship to Deceased</label>
                            <input
                                id="informantRelationship"
                                type="text"
                                value={informantRelationship}
                                onChange={(e) => setInformantRelationship(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter informant's relationship to deceased"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="receiverName" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Relationship to Deceased</label>
                            <input
                                id="receiver"
                                type="text"
                                value={receiverName}
                                onChange={(e) => setReceiverName(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter informant's relationship to deceased"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deceasedResidence" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Relationship to Deceased</label>
                            <input
                                id="deceasedResidence"
                                type="text"
                                value={deceasedResidence}
                                onChange={(e) => setDeceasedResidence(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased Residence address"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="occupation" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Relationship to Deceased</label>
                            <input
                                id="occupation"
                                type="text"
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased occupation"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="medicalHistory" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Relationship to Deceased</label>
                            <input
                                id="medicalHistory"
                                type="text"
                                value={medicalHistory}
                                onChange={(e) => setMedicalHistory(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased medical history"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="maritalStatus" className="block text-blue-900 font-bold mb-2 text-3xl">Informant's Relationship to Deceased</label>
                            <input
                                id="maritalStatus"
                                type="text"
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="Enter deceased medical history"
                                required
                            />
                        </div>
                        
                        <button type="submit" className="button-style bg-blue-900 hover:bg-green-500 text-blue text-2xl">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeathRegistrationForm;

