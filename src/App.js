import { useState } from "react";
import './App.css';
import AppContext from "./AppContext/AppContext";
import Home from './components/Pages/Login';

function App() {
  let isAuthState = useState(false);
  return (
    <>
    <div className="App">
 <AppContext.Provider value={isAuthState}>
 <Home></Home>

</AppContext.Provider>

 
    </div>
  
    </>
  );
}

export default App;
