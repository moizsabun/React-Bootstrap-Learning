import React, {useState}from 'react'
import {  Image, Form , Button, Alert} from 'react-bootstrap';
import { VerfiyLogin } from "../../Service/ApiService";
function Copyright() {
  return (
<p style={{ paddingTop: "10px" , textAlign:"ce" }}>
      {'Copyright © '}
      
        LDC SHUTDOWN ATOMATION
      {'  '}
      {new Date().getFullYear()}
      {'.'}
      </p>
  );
}

export default function Home() {
  const [state, setState] = useState({
    isLoading : 'no',
    vertical : 'bottom',
    horizontal: 'center',
    isOpen : false,
    

  });
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const Verifylogin = async e => {
    e.preventDefault();
    console.log("Login Button Clicked");
     

    try {
      console.log("in Try Block"); 
      //setLoading('loading');
      setState ({ isLoading:'loading'});
    
      await VerfiyLogin(username, password);
      
      console.log("Executed this line")
      //setLoading('');
      setState ({isLoading:'no'});
      //isAuth[1](true)
     
      
    
    
    }

    
    catch (error) {
     // setOpen(true);
      //setLoading();
      setState ({...state, isLoading:'no', isOpen:true});
      console.log("Error Occured");
      console.log(error);
      //isAuth[1](false)
    
    }


  }
 
    return (
        <div className="container-fluid bg">
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">  </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
            
            
            <Form className="form-container" onSubmit= {Verifylogin}>
            <h1> LDC PORTAL LOGIN</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter email" onChange={(e) => { setuserName(e.target.value) }} />
    <Form.Text className="text-muted" >
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  type="submit" className="btn btn-success btn-block"  disabled={state.isLoading === 'loading'}> 
    Submit
  </Button>
</Form>
            
            
            
            
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
       {/**  <Image src="https://assets.digitalocean.com/labs/images/community_bg.png" />
        <h1>Hello Wolrd</h1>*/}
       

        <div style={{marginTop : "10px"}}>
        <Alert variant="danger" onClose={() => setState({isOpen : false}) } dismissible  show={state.isOpen} >
          <Alert.Heading>Some thing went Wrong!!</Alert.Heading>
          <p>
           Error Occured While Login! Please contact Administrator
          </p>
        </Alert>
        </div>
          
        
        
     <div >
     <Copyright></Copyright>
     </div>
        </div>
        
    )
}
