import React from 'react'
import Header from "../Header";
import {BrowserRouter as Router,Switch,Route  } from "react-router-dom";
import Masterdata from './Masterdata';
import MasterdataArchive from './MasterdataArchive';
import Shutdown from './LoadShedding';
import ShutdownArchive from './LoadSheddingArchive';
export default function Home() {
        
    console.log("calling below conditions")
    return (

        <div className="bg">
        <Router>
        <Header></Header>
        <Switch>
            
            <Route  path = "/Masterdata" component={Masterdata} ></Route>
            <Route  path = "/MasterdataArchive" component={MasterdataArchive} ></Route>
            <Route  path = "/LoadShedding" component={Shutdown} ></Route>
            <Route  path = "/LoadSheddingArchive" component={ShutdownArchive} ></Route>
    </Switch>
    </Router>
        </div>
  

    )
}
