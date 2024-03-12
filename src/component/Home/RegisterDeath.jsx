import React, { useState } from 'react';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';


const RegisterDeath = () => {
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
    };
    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja"
    ];

  return (
    <div className='pt-6 '> 
      <div className=' flex px-56 pt-2 h-[1000px]'>
          <div className='bg-blue-950 w-full pt-1 h-[1490px]'>
          <div className="flex justify-center pt-[30px] items-center  h-[1000px]">
            <div className="bg-white  px-[615px] h-[1000px]">
                <form onSubmit={handleSubmit}>
                        <div className="mb-4 pt-36">
                            <label htmlFor="deceasedFullName" className="block text-blue-900 mb-2 text-2xl">Deceased Full Name</label>
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
                            <label htmlFor="deceasedAge" className="block text-blue-900 mb-2 text-2xl">Deceased Age</label>
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
                            <label htmlFor="gender" className="block text-blue-900 mb-2 text-2xl">Deceased Age</label>
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
                            <label htmlFor="placeOfDeath" className="block text-blue-900 mb-2 text-2xl">Place of Death</label>
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
                            <label htmlFor="causeOfDeath" className="block text-blue-900 mb-2 text-2xl">Cause of Death</label>
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
                            <label htmlFor="informantName" className="block text-blue-900 mb-2 text-2xl">Informant's Name</label>
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
                            <label htmlFor="informantRelationship" className="block text-blue-900 mb-2 text-2xl">Informant's Relationship to Deceased</label>
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
                            <label htmlFor="receiverName" className="block text-blue-900 mb-2 text-2xl">Informant's Relationship to Deceased</label>
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
                            <label htmlFor="deceasedResidence" className="block text-blue-900 mb-2 text-2xl">Informant's Relationship to Deceased</label>
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
                            <label htmlFor="occupation" className="block text-blue-900 mb-2 text-2xl">Informant's Relationship to Deceased</label>
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
                            <label htmlFor="medicalHistory" className="block text-blue-900 mb-2 text-2xl">Informant's Relationship to Deceased</label>
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
                            <label htmlFor="maritalStatus" className="block text-blue-900 mb-2 text-2xl">Informant's Relationship to Deceased</label>
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

      </div>


    </div>
  )
}

export default RegisterDeath;