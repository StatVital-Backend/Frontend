const Login = {
    facilityName: ElementInternals,
    password: password,
};
if(LoginType.loginType === 'hospital'){
    fetch("https://7168-102-89-32-113.ngrok-free.app/api/v1/logInHospital", {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body:JSON.stringify(HospitalLogin)
    }).then(response => response.json())
      .then(data => {
        console.log("SUCCESSFUL")
        Navigate('/birthlayout/registerbirth')
    }).catch(error => {
        console.error('Error:', error);
    });
    }
else if(LoginType.loginType === 'morgue'){
    fetch("https://7168-102-89-32-113.ngrok-free.app/api/v2/Log-In-Morgue", {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body:JSON.stringify(HospitalLogin)
    }).then(response => response.json())
    .then(data => {
        console.log("SUCCESSFUL")
        Navigate('/deathlayout/registerDeath')
    }).catch(error => {
        console.error('Error:', error);
    });
}
else {
    console.log("Login Type must be entered")
}
