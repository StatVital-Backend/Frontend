import React, { useState } from 'react';
import FilledButton from '../../../../reuseables/bottons/FilledButton/FilledButton';


const UpdateBirthInfo = () => {
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
    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja"
    ];

  return (
    <div className='pt-6 '> 
      <div className=' flex px-56 pt-2 h-[1000px]'>
          <div className='bg-blue-400 w-full h-[1030px]'>
          <div className="flex justify-center pt-[30px] items-center  h-[1000px]">
            <div className="bg-white px-[495px] h-[1000px]  rounded-sm ">
                <form onSubmit={handleSubmit}>
                <div className="mb-4 pt-36">
                    <label htmlFor="officialEmail" className="block text-blue-900 font mb-2 text-2xl">Official Email</label>
                    <input
                        id="officialEmail"
                        type="email"
                        value={officialEmail}
                        onChange={(e) => setOfficialEmail(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nurseName" className="block text-blue-900 font mb-2 text-2xl">Nurse Name</label>
                    <input
                        id="nurseName"
                        type="text"
                        value={nurseName}
                        onChange={(e) => setNurseName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="enter nurse name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fatherFullName" className="block text-blue-900 font mb-2 text-2xl">Father's Full Name</label>
                    <input
                        id="fatherFullName"
                        type="text"
                        value={fatherFullName}
                        onChange={(e) => setFatherFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter father full name" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="motherFullName" className="block text-blue-900 font mb-2 text-2xl">Mother's Full Name</label>
                    <input
                        id="motherFullName"
                        type="text"
                        value={motherFullName}
                        onChange={(e) => setMotherFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter mother's full name" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="childFullName" className="block text-blue-900 font mb-2 text-2xl">Child's Full Name</label>
                    <input
                        id="childFullName"
                        type="text"
                        value={childFullName}
                        onChange={(e) => setChildFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="Enter child full name" required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="stateOfOrigin" className="block text-blue-900 font mb-2 text-2xl ">State of Origin</label>
                    <select
                        id="stateOfOrigin"
                        value={stateOfOrigin}
                        onChange={(e) => setStateOfOrigin(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        required
                    >
                        <option value="">Select State</option>
                        {nigerianStates.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sex" className="block text-blue-900 font mb-2 text-2xl">Sex</label>
                    <select
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        required
                    >
                        <option value="">Select Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <FilledButton text="Update" style={{width: ["650px"]}}/>
                
            </form>
        </div>
        </div>
          </div>

      </div>
    </div>
  )
}

export default UpdateBirthInfo;