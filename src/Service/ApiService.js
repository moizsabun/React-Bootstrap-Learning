const url = "http://localhost:52293/api";

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

export const getAllMasterData =async() => {
   
    console.log("Getting Token from Local Storage");
    console.log(localStorage.getItem("Token"));
    let token =localStorage.getItem("Token"); 
    
  


    let GetData = await fetch(`${url}/MasterData/getAllMasterData`, {
        method: "GET",
      
        
        
        headers: {
            // 'Authorization' :`Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    })
    let getData = await GetData.json();

    console.log(getData);
    return getData;
  ;
}

export const getAllLSData =async() => {

    console.log("Getting Token from Local Storage");
    console.log(localStorage.getItem("Token"));
    let token =localStorage.getItem("Token"); 
    
  


    let GetData = await fetch(`${url}/LoadShediing/GetLoadSheddings`, {
        method: "GET",
      
        
        
        headers: {
            // 'Authorization' :`Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    })
    let getData = await GetData.json();

    console.log(getData);
    return getData;
  ;
}