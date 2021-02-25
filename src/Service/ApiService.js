const url = "http://mmr-dev.ke.com.pk:7001/api";

export const VerfiyLogin = async (getusername, getpassword) => {

    console.log("function called");
    console.log(`user name ${getusername}`);
    console.log(`password ${getpassword}`);

    let getToken = await fetch(`${url}/Login/authenticate`, {
        method: "POST",
        body: JSON.stringify({
            username: getusername,
            password: getpassword,
        }),
        headers: {
            
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
        },
        mode: 'cors',
    });
    console.log(getToken);

    if (getToken.status === 200) {

        let { token, expiryDate } = await getToken.json();
        localStorage.setItem("Token", token);
        console.log(token);
        console.log(expiryDate);

    }

}