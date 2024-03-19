import React, { useState } from 'react';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import GhostButton from '../../reuseables/bottons/GhostButton/GhostButton';
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton';


const RegisterBirthAndAdd = () => {
    const [name, setName] = useState('');
    const [fatherFullName, setFatherFullName] = useState('');
    const [motherFullName, setMotherFullName] = useState('');
    const [lg, setlg] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [sex, setSex] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja"
    ];

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const fields = {
            name: name,
            fatherFullName: fatherFullName,
            motherFullName: motherFullName,
            lg:lg,
            stateOfOrigin: stateOfOrigin,
            sex: sex
        }
        try {
            const response = await fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/RegisterChild", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fields)
            });        
            if (response.ok) {
                const data = await response.json();
                    setErrMsg(data.message)
                    console.log(data);
                    setTimeout(()=>{
                        setSuccessMsg(data.message);
                    }, 1500);
                    // navigate("/birthlayout/registerBirthAndAdd")
                }
            
            } catch (error) {
                console.error('Error:', error);
                setErrMsg("Incorrect Password");
            }
    };
    

  return (
    <div className='pt-6 '> 
      <div className=' flex px-56 pt-2 h-[1000px]'>
          <div className='bg-blue-400 w-full h-[1030px]'>
          <div className="flex justify-center pt-[30px] items-center  h-[1000px]">
            <div className="bg-white px-[495px] h-[1000px]  rounded-sm ">
                
                <form onSubmit={handleSubmit}>
                <div className="mb-4 pt-36">
                    <label htmlFor="name" className="block text-blue-900 font mb-2 text-2xl">Full Name</label>
                    <input
                        id="name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="(surname first in blck letters) "
                        required
                    />
                </div>
               
                <div className="mb-4">
                    <label htmlFor="fatherFullName" className="block text-blue-900 font mb-2 text-2xl">Full Name Of Father</label>
                    <input
                        id="fatherFullName"
                        type="text"
                        value={fatherFullName}
                        onChange={(e) => setFatherFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="(surname first in blck letters) " required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="motherFullName" className="block text-blue-900 font mb-2 text-2xl">Full Name Of Mother</label>
                    <input
                        id="motherFullName"
                        type="text"
                        value={motherFullName}
                        onChange={(e) => setMotherFullName(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 roundedtext-2xl text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="(surname first in blck letters) " required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="stateOfOrigin" className="block text-blue-900 font mb-2 text-2xl ">State of Origin(Town/Village)</label>
                    <select
                        id="stateOfOrigin"
                        value={stateOfOrigin}
                        onChange={(e) => setStateOfOrigin(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        required
                    >
                        <option value="">Select State</option>
                        {nigerianStates.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lg" className="block text-blue-900 font mb-2 text-2xl">L.G.A</label>
                    <input
                        id="lg"
                        type="text"
                        value={lg}
                        onChange={(e) => setlg(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        placeholder="enter LG area"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sex" className="block text-blue-900 font mb-2 text-2xl">Sex</label>
                    <select
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                        required
                    >
                        <option value="">Select Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="pt-9">
                <FilledButton text="Register" style={{width: ["650px"]}}/>
                </div>
            </form>
        </div>
        </div>
          </div>

      </div>
    </div>
  )
}

export default RegisterBirthAndAdd;