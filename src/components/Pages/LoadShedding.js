import React, {useState,useEffect} from "react";
import {Card,Form, Button} from 'react-bootstrap';
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import UseTable from "../Controls/UseTable";
import {getAllLSData} from "../../Service/ApiService"
export default function Shutdown() {
    const [isUpdated ,setUpdated] = useState("");
    const [getLSData, setLSData] = useState([]);
    const headCells = [
        {dataField : 'LoadSheddingSNO', text : 'SNO' },
        {dataField : 'group', text : 'Group' , sort: true },
        {dataField : 'block', text : 'Block' , sort: true },
        {dataField : 'llFeders', text : 'LL Feeders' },
        {dataField : 'mlFeeders', text : 'ML Feeders'  },
        {dataField : 'hlFeeders', text : 'HL Feeders' },
        {dataField : 'vhlFeeders', text : 'VHL Feeders' },
        {dataField : 'totalFeeders', text : 'TOTAL Feeders' },
        {dataField : 'spell_1_to_and_From', text : 'SPELL 1 TO AND FROM' },
        {dataField : 'spell_2_to_and_From', text : 'SPELL 2 TO AND FROM' },
        {dataField : 'spell_3_to_and_From', text : 'SPELL 3 TO AND FROM' },
        {dataField : 'spell_4_to_and_From', text : 'SPELL 4 TO AND FROM'},
        {dataField : 'spell_5_to_and_From', text : 'SPELL 5 TO AND FROM' },
        {dataField : 'spell_6_to_and_From', text : 'SPELL 6 TO AND FROM' },
        {dataField : 'planExpiry', text : 'EXPIRY'},
        {dataField : 'dataAddedDateTime', text : 'dataAddedDateTime'},
        {dataField : 'dataAddedBy', text : 'dataAddedBy' , sort: true}
      
    ]
 
    useEffect(() => {
        console.log(isUpdated)
        const fetchAPI = async () => {
            try {
               
                setLSData(await getAllLSData());
             
            } catch (error) {
                console.log(`Error ${error}`)
            }
           
        }
    
    
        fetchAPI(); 
    },[isUpdated]);
  return (
    <Card style={{width : '90%' , height: '80%', marginLeft: "5vw"  , marginTop: "10px" }}>
    <Card.Body >
    <Form style={{display: "flex" ,  flexDirection: "row" }}>
  <Form.File 
    id="upload1"
    style= {{width:"200px", marginBottom: "10px" ,  flexGrow: 1}}
  />
      <Button  variant="secondary" size="sm" style={{borderRadius: "10" , marginBottom: "10px" 
  , flexGrow: 1, height: "40px" }}>Upload File</Button>
 <div style= {{marginLeft: "20vw"}}></div>
  <Button variant="primary" size="sm" style={{borderRadius: "10" , marginBottom: "10px", 
  height: "40px" }}>Add New</Button>
 
 
</Form>
    <UseTable tableData= {getLSData} TableHeads={headCells}></UseTable>
    </Card.Body>
    </Card>
  );
}
