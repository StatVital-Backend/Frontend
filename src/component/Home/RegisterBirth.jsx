import React, { useState } from 'react';
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';

const RegisterBirthAndAdd = () => {
    const [name, setName] = useState('');
    const [fatherFullName, setFatherFullName] = useState('');
    const [motherFullName, setMotherFullName] = useState('');
    const [lg, setLg] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [sex, setSex] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
    ];

    const renderLGAs = (selectedState) => {
        const lgas = {
            "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Isiala-Ngwa North", "Isiala-Ngwa South", "Ikwuano", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu-Neochi"],
            "Adamawa": ["Demsa", "Fufure", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
            "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong Oruko", "Uyo"],
            "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
            "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
            "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas-Gadau", "Jama are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", " Toro", " Warji"," Zaki"],
            "Bayelsa": ["Brass", "Ekeremor", "Kolokuma Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
            "Benue": ["Agatu", "Apa",
                "Ado",
                "Buruku",
                "Gboko",
                "Guma",
                "Gwer East",
                "Gwer West",
                "Katsina-Ala",
                "Konshisha",
                "Kwande",
                "Logo",
                "Makurdi",
                "Obi",
                "Ogbadibo",
                "Ohimini",
                "Oju",
                "Okpokwu",
                "Oturkpo",
                "Tarka",
                "Ukum",
                "Ushongo",
                "Vandeikya"
              ],
              "Borno": [
                "Abadam",
                "Askira-Uba",
                "Bama",
                "Bayo",
                "Biu",
                "Chibok",
                "Damboa",
                "Dikwa",
                "Gubio",
                "Guzamala",
                "Gwoza",
                "Hawul",
                "Jere",
                "Kaga",
                "Kala-Balge",
                "Konduga",
                "Kukawa",
                "Kwaya Kusar",
                "Mafa",
                "Magumeri",
                "Maiduguri",
                "Marte",
                "Mobbar",
                "Monguno",
                "Ngala",
                "Nganzai",
                "Shani"
              ],
              "Cross River": [
                "Abi",
                "Akamkpa",
                "Akpabuyo",
                "Bakassi",
                "Bekwarra",
                "Biase",
                "Boki",
                "Calabar Municipal",
                "Calabar South",
                "Etung",
                "Ikom",
                "Obanliku",
                "Obubra",
                "Obudu",
                "Odukpani",
                "Ogoja",
                "Yakuur",
                "Yala"
              ],
      
              "Delta": [
                "Aniocha North",
                "Aniocha South",
                "Bomadi",
                "Burutu",
                "Ethiope East",
                "Ethiope West",
                "Ika North East",
                "Ika South",
                "Isoko North",
                "Isoko South",
                "Ndokwa East",
                "Ndokwa West",
                "Okpe",
                "Oshimili North",
                "Oshimili South",
                "Patani",
                "Sapele",
                "Udu",
                "Ughelli North",
                "Ughelli South",
                "Ukwuani",
                "Uvwie",
                "Warri North",
                "Warri South",
                "Warri South West"
              ],
      
              "Ebonyi": [
                "Abakaliki",
                "Afikpo North",
                "Afikpo South",
                "Ebonyi",
                "Ezza North",
                "Ezza South",
                "Ikwo",
                "Ishielu",
                "Ivo",
                "Izzi",
                "Ohaozara",
                "Ohaukwu",
                "Onicha"
              ],
              "Edo": [
                "Akoko-Edo",
                "Egor",
                "Esan Central",
                "Esan North-East",
                "Esan South-East",
                "Esan West",
                "Etsako Central",
                "Etsako East",
                "Etsako West",
                "Igueben",
                "Ikpoba Okha",
                "Orhionmwon",
                "Oredo",
                "Ovia North-East",
                "Ovia South-West",
                "Owan East",
                "Owan West",
                "Uhunmwonde"
              ],
      
              "Ekiti": [
                "Ado Ekiti",
                "Efon",
                "Ekiti East",
                "Ekiti South-West",
                "Ekiti West",
                "Emure",
                "Gbonyin",
                "Ido Osi",
                "Ijero",
                "Ikere",
                "Ikole",
                "Ilejemeje",
                "Irepodun-Ifelodun",
                "Ise-Orun",
                "Moba",
                "Oye"
              ],
              "Rivers": [
                "Port Harcourt",
                "Obio-Akpor",
                "Okrika",
                "Ogu–Bolo",
                "Eleme",
                "Tai",
                "Gokana",
                "Khana",
                "Oyigbo",
                "Opobo–Nkoro",
                "Andoni",
                "Bonny",
                "Degema",
                "Asari-Toru",
                "Akuku-Toru",
                "Abua–Odual",
                "Ahoada West",
                "Ahoada East",
                "Ogba–Egbema–Ndoni",
                "Emohua",
                "Ikwerre",
                "Etche",
                "Omuma"
              ],
              "Enugu": [
                "Aninri",
                "Awgu",
                "Enugu East",
                "Enugu North",
                "Enugu South",
                "Ezeagu",
                "Igbo Etiti",
                "Igbo Eze North",
                "Igbo Eze South",
                "Isi Uzo",
                "Nkanu East",
                "Nkanu West",
                "Nsukka",
                "Oji River",
                "Udenu",
                "Udi",
                "Uzo Uwani"
              ],
              "FCT Abuja": [
                "Abaji",
                "Bwari",
                "Gwagwalada",
                "Kuje",
                "Kwali",
                "Municipal Area Council"
              ],
              "Gombe": [
                "Akko",
                "Balanga",
                "Billiri",
                "Dukku",
                "Funakaye",
                "Gombe",
                "Kaltungo",
                "Kwami",
                "Nafada",
                "Shongom",
                "Yamaltu-Deba"
              ],
              "Imo": [
                "Aboh Mbaise",
                "Ahiazu Mbaise",
                "Ehime Mbano",
                "Ezinihitte",
                "Ideato North",
                "Ideato South",
                "Ihitte-Uboma",
                "Ikeduru",
                "Isiala Mbano",
                "Isu",
                "Mbaitoli",
                "Ngor Okpala",
                "Njaba",
                "Nkwerre",
                "Nwangele",
                "Obowo",
                "Oguta",
                "Ohaji-Egbema",
                "Okigwe",
                "Orlu",
                "Orsu",
                "Oru East",
                "Oru West",
                "Owerri Municipal",
                "Owerri North",
                "Owerri West",
                "Unuimo"
              ],
              "Jigawa": [
                "Auyo",
                "Babura",
                "Biriniwa",
                "Birnin Kudu",
                "Buji",
                "Dutse",
                "Gagarawa",
                "Garki",
                "Gumel",
                "Guri",
                "Gwaram",
                "Gwiwa",
                "Hadejia",
                "Jahun",
                "Kafin Hausa",
                "Kazaure",
                "Kiri Kasama",
                "Kiyawa",
                "Kaugama",
                "Maigatari",
                "Malam Madori",
                "Miga",
                "Ringim",
                "Roni",
                "Sule Tankarkar",
                "Taura",
                "Yankwashi"
              ],
              "Kaduna": [
                "Birnin Gwari",
                "Chikun",
                "Giwa",
                "Igabi",
                "Ikara",
                "Jaba",
                "Jema a",
                "Kachia",
                "Kaduna North",
                "Kaduna South",
                "Kagarko",
                "Kajuru",
                "Kaura",
                "Kauru",
                "Kubau",
                "Kudan",
                "Lere",
                "Makarfi",
                "Sabon Gari",
                "Sanga",
                "Soba",
                "Zangon Kataf",
                "Zaria"
              ],
              "Kano": [
                "Ajingi",
                "Albasu",
                "Bagwai",
                "Bebeji",
                "Bichi",
                "Bunkure",
                "Dala",
                "Dambatta",
                "Dawakin Kudu",
                "Dawakin Tofa",
                "Doguwa",
                "Fagge",
                "Gabasawa",
                "Garko",
                "Garun Mallam",
                "Gaya",
                "Gezawa",
                "Gwale",
                "Gwarzo",
                "Kabo",
                "Kano Municipal",
                "Karaye",
                "Kibiya",
                "Kiru",
                "Kumbotso",
                "Kunchi",
                "Kura",
                "Madobi",
                "Makoda",
                "Minjibir",
                "Nasarawa",
                "Rano",
                "Rimin Gado",
                "Rogo",
                "Shanono",
                "Sumaila",
                "Takai",
                "Tarauni",
                "Tofa",
                "Tsanyawa",
                "Tudun Wada",
                "Ungogo",
                "Warawa",
                "Wudil"
              ],
              "Katsina": [
                "Bakori",
                "Batagarawa",
                "Batsari",
                "Baure",
                "Bindawa",
                "Charanchi",
                "Dandume",
                "Danja",
                "Dan Musa",
                "Daura",
                "Dutsi",
                "Dutsin Ma",
                "Faskari",
                "Funtua",
                "Ingawa",
                "Jibia",
                "Kafur",
                "Kaita",
                "Kankara",
                "Kankia",
                "Katsina",
                "Kurfi",
                "Kusada",
                "Mai Adua",
                "Malumfashi",
                "Mani",
                "Mashi",
                "Matazu",
                "Musawa",
                "Rimi",
                "Sabuwa",
                "Safana",
                "Sandamu",
                "Zango"
              ],
              "Kebbi": [
                "Aleiro",
                "Arewa Dandi",
                "Argungu",
                "Augie",
                "Bagudo",
                "Birnin Kebbi",
                "Bunza",
                "Dandi",
                "Fakai",
                "Gwandu",
                "Jega",
                "Kalgo",
                "Koko Besse",
                "Maiyama",
                "Ngaski",
                "Sakaba",
                "Shanga",
                "Suru",
                "Wasagu Danko",
                "Yauri",
                "Zuru"
              ],
              "Kogi": [
                "Adavi",
                "Ajaokuta",
                "Ankpa",
                "Bassa",
                "Dekina",
                "Ibaji",
                "Idah",
                "Igalamela Odolu",
                "Ijumu",
                "Kabba Bunu",
                "Kogi",
                "Lokoja",
                "Mopa Muro",
                "Ofu",
                "Ogori Magongo",
                "Okehi",
                "Okene",
                "Olamaboro",
                "Omala",
                "Yagba East",
                "Yagba West"
              ],
              "Kwara": [
                "Asa",
                "Baruten",
                "Edu",
                "Ekiti",
                "Ifelodun",
                "Ilorin East",
                "Ilorin South",
                "Ilorin West",
                "Irepodun",
                "Isin",
                "Kaiama",
                "Moro",
                "Offa",
                "Oke Ero",
                "Oyun",
                "Pategi"
              ],
              "Lagos": [
                "Agege",
                "Ajeromi-Ifelodun",
                "Alimosho",
                "Amuwo-Odofin",
                "Apapa",
                "Badagry",
                "Epe",
                "Eti Osa",
                "Ibeju-Lekki",
                "Ifako-Ijaiye",
                "Ikeja",
                "Ikorodu",
                "Kosofe",
                "Lagos Island",
                "Lagos Mainland",
                "Mushin",
                "Ojo",
                "Oshodi-Isolo",
                "Shomolu",
                "Surulere"
              ],
              "Nasarawa": [
                "Akwanga",
                "Awe",
                "Doma",
                "Karu",
                "Keana",
                "Keffi",
                "Kokona",
                "Lafia",
                "Nasarawa",
                "Nasarawa Egon",
                "Obi",
                "Toto",
                "Wamba"
              ],
              "Niger": [
                "Agaie",
                "Agwara",
                "Bida",
                "Borgu",
                "Bosso",
                "Chanchaga",
                "Edati",
                "Gbako",
                "Gurara",
                "Katcha",
                "Kontagora",
                "Lapai",
                "Lavun",
                "Magama",
                "Mariga",
                "Mashegu",
                "Mokwa",
                "Moya",
                "Paikoro",
                "Rafi",
                "Rijau",
                "Shiroro",
                "Suleja",
                "Tafa",
                "Wushishi"
              ],
              "Ogun": [
                "Abeokuta North",
                "Abeokuta South",
                "Ado-Odo Ota",
                "Egbado North",
                "Egbado South",
                "Ewekoro",
                "Ifo",
                "Ijebu East",
                "Ijebu North",
                "Ijebu North East",
                "Ijebu Ode",
                "Ikenne",
                "Imeko Afon",
                "Ipokia",
                "Obafemi Owode",
                "Odeda",
                "Odogbolu",
                "Ogun Waterside",
                "Remo North",
                "Shagamu"
              ],
              "Ondo": [
                "Akoko North-East",
                "Akoko North-West",
                "Akoko South-West",
                "Akoko South-East",
                "Akure North",
                "Akure South",
                "Ese Odo",
                "Idanre",
                "Ifedore",
                "Ilaje",
                "Ile Oluji-Okeigbo",
                "Irele",
                "Odigbo",
                "Okitipupa",
                "Ondo East",
                "Ondo West",
                "Ose",
                "Owo"
              ],
              "Osun": [
                "Atakunmosa East",
                "Atakunmosa West",
                "Aiyedaade",
                "Aiyedire",
                "Boluwaduro",
                "Boripe",
                "Ede North",
                "Ede South",
                "Ife Central",
                "Ife East",
                "Ife North",
                "Ife South",
                "Egbedore",
                "Ejigbo",
                "Ifedayo",
                "Ifelodun",
                "Ila",
                "Ilesa East",
                "Ilesa West",
                "Irepodun",
                "Irewole",
                "Isokan",
                "Iwo",
                "Obokun",
                "Odo Otin",
                "Ola Oluwa",
                "Olorunda",
                "Oriade",
                "Orolu",
                "Osogbo"
              ],
              "Oyo": [
                "Afijio",
                "Akinyele",
                "Atiba",
                "Atisbo",
                "Egbeda",
                "Ibadan North",
                "Ibadan North-East",
                "Ibadan North-West",
                "Ibadan South-East",
                "Ibadan South-West",
                "Ibarapa Central",
                "Ibarapa East",
                "Ibarapa North",
                "Ido",
                "Irepo",
                "Iseyin",
                "Itesiwaju",
                "Iwajowa",
                "Kajola",
                "Lagelu",
                "Ogbomosho North",
                "Ogbomosho South",
                "Ogo Oluwa",
                "Olorunsogo",
                "Oluyole",
                "Ona Ara",
                "Orelope",
                "Ori Ire",
                "Oyo",
                "Oyo East",
                "Saki East",
                "Saki West",
                "Surulere"
              ],
              "Plateau": [
                "Bokkos",
                "Barkin Ladi",
                "Bassa",
                "Jos East",
                "Jos North",
                "Jos South",
                "Kanam",
                "Kanke",
                "Langtang South",
                "Langtang North",
                "Mangu",
                "Mikang",
                "Pankshin",
                "Qua an Pan",
                "Riyom",
                "Shendam",
                "Wase"
              ],
              "Sokoto": [
                "Binji",
                "Bodinga",
                "Dange Shuni",
                "Gada",
                "Goronyo",
                "Gudu",
                "Gwadabawa",
                "Illela",
                "Isa",
                "Kebbe",
                "Kware",
                "Rabah",
                "Sabon Birni",
                "Shagari",
                "Silame",
                "Sokoto North",
                "Sokoto South",
                "Tambuwal",
                "Tangaza",
                "Tureta",
                "Wamako",
                "Wurno",
                "Yabo"
              ],
              "Taraba": [
                "Ardo Kola",
                "Bali",
                "Donga",
                "Gashaka",
                "Gassol",
                "Ibi",
                "Jalingo",
                "Karim Lamido",
                "Kumi",
                "Lau",
                "Sardauna",
                "Takum",
                "Ussa",
                "Wukari",
                "Yorro",
                "Zing"
              ],
              "Yobe": [
                "Bade",
                "Bursari",
                "Damaturu",
                "Fika",
                "Fune",
                "Geidam",
                "Gujba",
                "Gulani",
                "Jakusko",
                "Karasuwa",
                "Machina",
                "Nangere",
                "Nguru",
                "Potiskum",
                "Tarmuwa",
                "Yunusari",
                "Yusufari"],
              "Zamfara": ["Anka", "Bakura", "Birnin Magaji Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun","Maru", "Shinkafi", "Talata Mafara", "Chafe", "Zurmi"]
        };
    
        return lgas[selectedState].map((lga, index) => (
            <option key={index} value={lga}>{lga}</option>
        ));
    };

    const toggleLGA = (e) => {
        const selectedState = e.target.value;
        setLg('');
        setStateOfOrigin(selectedState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
            name: name,
            fatherName: fatherFullName,
            motherName: motherFullName,
            lg: lg,
            stateOfOrigin: stateOfOrigin,
            sex: sex
        };
        try {
            const response = await fetch("https://tops-chimp-promoted.ngrok-free.app/api/v1/registerChild", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fields)
            });
            
            if (response.ok) {
                const data = await response.json();
                setErrMsg(data.message);
                setSuccessMsg(data.message);
                setName('');
                setFatherFullName('');
                setMotherFullName('');
                setLg('');
                setStateOfOrigin('');
                setSex('');
                setTimeout(() => {
                    setSuccessMsg('');
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrMsg("Network problem");
        }
    };

    return (
        <div className='pt-6 '>
          <h2 className="text-4xl text-blue-950 font-semibold mb-4 pt-8 justify-center center flex uppercase">WELCOME TO ...... HOSPITAL</h2>
            <div className=' flex px-56 pt-2 h-[1000px]'>
                <div className='bg-blue-400 w-full h-[1030px]'>
                    <div className="flex justify-center pt-[30px] items-center  h-[1000px]">
                        <div className="bg-white px-[371px] h-[1000px]  rounded-sm ">
                          {/* {
                            errMsg && (
                              <p className='text-red-500 text-3xl'>{errMsg}</p>
                            )
                          } */}
                        {successMsg && (
                                <p className="text-green-500 text-5xl justify-center center flex">{successMsg}</p>
                            )}
                            <form onSubmit={handleSubmit}>                    
                            <div className="mb-4 pt-24">
                                <label htmlFor="name" className="block text-blue-900 font mb-2 text-2xl">Full Name</label>
                                <input
                                    id="name"
                                    type="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[900px] py-2.5 px-4"
                                    placeholder="(surname first in block letters) "
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
                                    placeholder="(surname first in block letters) " required
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
                                    placeholder="(surname first in block letters) " required
                                />
                            </div>



                                <div className="mb-4">
                                    <label htmlFor="stateOfOrigin" className="block text-blue-900 font mb-2 text-2xl ">State of Origin(Town/Village)</label>
                                    <select
                                        id="stateOfOrigin"
                                        value={stateOfOrigin}
                                        onChange={toggleLGA}
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
                                    <label htmlFor="lg" className="block text-blue-900 font mb-2 text-2xl ">Local Government</label>
                                    <select
                                        id="lg"
                                        value={lg}
                                        onChange={(e) => setLg(e.target.value)}
                                        className="bg-gray-200 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                        required
                                    >
                                        <option value="">Select Local Government</option>
                                        {stateOfOrigin &&
                                            renderLGAs(stateOfOrigin)
                                        }
                                    </select>
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


                                <div className="mb-4">
                                    <FilledButton buttonText="Submit" type="submit" />
                                </div>
                                
                                <div className="pt-9">
                                    <FilledButton text="Register" style={{width: ["900px"]}}/>
                                </div>

                            </form>

                            {/* {errMsg && (
                                <p className="text-red-500 text-3xl justify-center center flex">{errMsg}</p>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterBirthAndAdd;

























