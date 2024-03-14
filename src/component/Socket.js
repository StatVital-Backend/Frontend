import React, {useState, useEffect} from 'react';

const Socket = () => {
    const [hospitalAdmin, setHospitalAdmin] = useState([])

    useEffect(()=>{
        fetch()
        .then(res => res.json())
        .then(resData => setHospitalAdmin(resData))
        .catch()

    },[])
    
}