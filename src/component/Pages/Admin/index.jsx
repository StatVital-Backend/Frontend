import React from 'react';
import RegisterChildbirth from './ChildRegistrationForm';
import SearchRecords from './RecordSearch';
import RegisterDeath from './DeathRegistrationForm';
import UpdateBirthInfo from './UpdateBirthInfo';
import UpdateDeathInfo from './UpdateDeathInfo';
import DeleteRecords from './DeleteRecords';

const AdminPage = () => {
    return (
        <div className="bg-blue-400 min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold text-white mb-8">Admin Dashboard</h1>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Register New Childbirth</h2>
                    <RegisterChildbirth />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Search Records</h2>
                    <SearchRecords />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Register Death</h2>
                    <RegisterDeath />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Update Birth Information</h2>
                    <UpdateBirthInfo />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Update Death Information</h2>
                    <UpdateDeathInfo />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Delete Records</h2>
                    <DeleteRecords />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
