import React, { useState, useEffect } from 'react';
// import FilledButton from '../../../../reuseables/bottons/FilledButton/FilledButton';
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/death/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Deleted death info:', data);
            navigate('/admin/death-info'); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [id, navigate]);

    return (
        <div className=" h-screen bg-blue-950">  
            <div className="flex">    
                <div className="flex h-screen">
                    <div className="bg-white w-[850px] rounded-sm p-6">
                        <h1 className="text-3xl text-blue-950 font-bold mb-5">Deleting Death Information</h1>
                        <p className="text-blue-950 mb-5">Please wait while we delete the death information...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;
