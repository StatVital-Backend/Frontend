import React, { useState } from 'react';

const ChildRegistrationForm = () => {
    const [officialEmail, setOfficialEmail] = useState('');
    const [nurseName, setNurseName] = useState('');
    const [fatherFullName, setFatherFullName] = useState('');
    const [motherFullName, setMotherFullName] = useState('');
    const [childFullName, setChildFullName] = useState('');
    const [birthDateTime, setBirthDateTime] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [sex, setSex] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Child Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="officialEmail" className="block text-gray-700 font-bold mb-2">Official Email</label>
                    <input
                        id="officialEmail"
                        type="email"
                        value={officialEmail}
                        onChange={(e) => setOfficialEmail(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nurseName" className="block text-gray-700 font-bold mb-2">Nurse Name</label>
                    <input
                        id="nurseName"
                        type="text"
                        value={nurseName}
                        onChange={(e) => setNurseName(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fatherFullName" className="block text-gray-700 font-bold mb-2">Father's Full Name</label>
                    <input
                        id="fatherFullName"
                        type="text"
                        value={fatherFullName}
                        onChange={(e) => setFatherFullName(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="motherFullName" className="block text-gray-700 font-bold mb-2">Mother's Full Name</label>
                    <input
                        id="motherFullName"
                        type="text"
                        value={motherFullName}
                        onChange={(e) => setMotherFullName(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="childFullName" className="block text-gray-700 font-bold mb-2">Child's Full Name</label>
                    <input
                        id="childFullName"
                        type="text"
                        value={childFullName}
                        onChange={(e) => setChildFullName(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="birthDateTime" className="block text-gray-700 font-bold mb-2">Date and Time of Birth</label>
                    <input
                        id="birthDateTime"
                        type="datetime-local"
                        value={birthDateTime}
                        onChange={(e) => setBirthDateTime(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stateOfOrigin" className="block text-gray-700 font-bold mb-2">State of Origin</label>
                    <input
                        id="stateOfOrigin"
                        type="text"
                        value={stateOfOrigin}
                        onChange={(e) => setStateOfOrigin(e.target.value)}
                        className="input-style"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sex" className="block text-gray-700 font-bold mb-2">Sex</label>
                    <select
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="input-style"
                        required
                    >
                        <option value="">Select Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit" className="button-style">Register Childbirth</button>
            </form>
        </div>
    );
};

export default ChildRegistrationForm;
