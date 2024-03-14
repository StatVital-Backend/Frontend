import React, {useState, useEffect} from 'react';

const Socket = () => {
    const [hospitalAdmin, setHospitalAdmin] = useState([])

    useEffect(()=>{
        // const socket = new WebSocket('ws://localhost')

        // socket.onopen = function(event){
        //     console.log("Websocket Connection Started");
        // };

        // socket.onmessage = function(event){
        //     const data = JSON.parse(event.data);
        //     setHospitalAdmin(data);
        // };
        // socket.onclose = function(event){
        //     console.log("Connection Close")
        // };
        // return()=>{
        //     socket.close;
        // };
        fetch()
        .then(res => res.json())
        .then(resData => setHospitalAdmin(resData))
        .catch()

    },[])
    // useEffect(()=>{
    //     const fetchData = ()=>{
    //         socket.send(JSON.stringify({action: 'getData'}));
    //     };
    //     const interval = setInterval(fetchData, 5000);
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // }, [])

    
}