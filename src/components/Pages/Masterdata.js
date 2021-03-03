import { Button } from 'react-bootstrap';
import React , {useState,useEffect}from 'react'
import {Card,Table,Form} from 'react-bootstrap';
import Footer from '../Footer';
import {getAllMasterData}   from "../../Service/ApiService";
import  UseTable  from "../Controls/UseTable";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';  
export default function Masterdata() {
  const headCells = [
    {dataField : 'MasterDataSNO', text : 'SNO' ,   headerAlign: 'center'},
    {dataField : 'ISLAND', text : 'ISLAND'  , sort: true ,   headerAlign: 'center'
  },
    {dataField : 'gridBlock', text : 'Grid Block'   , sort: true ,   headerAlign: 'center' },
    {dataField : 'trafo', text : 'TRAFO',   headerAlign: 'center'},
    {dataField : 'feederId', text : 'Feeder Id'  },
    {dataField : 'switch_Number', text : 'Switch #'},
    {dataField : 'switch_Name', text : 'Switch Name' },
    {dataField : 'switch_Type', text : 'Switch Type' },
    {dataField : 'feedeR_TYPE', text : 'FEEDER TYPE' },
    {dataField : 'group', text : 'Group' },
    {dataField : 'category', text : 'Category' },
    {dataField : 'switch_Make', text : 'Switch Make'},
    {dataField : 'region', text : 'Region' },
    {dataField : 'cable_Status', text : 'Cable Status Single/Double cable' },
    {dataField : 'ufR_SW', text : 'UFR (Sw)'},
    {dataField : 'stage_A', text : 'Stage A 49.4 df/dt'},
    {dataField : 'stage_B', text : 'Stage B 49.4 df/dt'},
    {dataField : 's1', text : '49.3(S1)' },
    {dataField : 's2', text : '49.2(S2)50 ms3' },
    {dataField : 's3', text : '49.0 (S3) 150ms' },
    {dataField : 's4', text : '48.8 (S4) 200ms' },
    {dataField : 's5', text : '48.6(S5)50 ms' },
    {dataField : 's6', text : '48.6(S6)200 ms' },
    {dataField : 's7', text : '48.6(S7)300 ms' },
    {dataField : 's8', text : '48.5(S8)100 ms' },
    {dataField : 's9', text : '48.5(S9)50 ms' },
    {dataField : 's10', text : '48.4(S10)100 ms'},
    {dataField : 's11', text : '48.4(S11)50 ms'},
    {dataField: 'caP_MVAR', text : 'CAP (Faulty, drop) MVAR' },
    {dataField : 'caP_OK_MVAR', text : 'CAP OK MVAR' },
    {dataField : 'dataAddedBy', text : 'Data Added By User' },
    {dataField : 'dataAddedDateTime', text : 'Data Added DateTime' },
    {dataField : 'actions', text : 'Actions' }]
    const [getMasterData, setMasterData] = useState([]);
    const [isUpdated ,setUpdated] = useState("")
    const [filterfn, setFilter] = useState( {fn : masterdataRecords => {return masterdataRecords}});
    useEffect(() => {
      console.log(isUpdated)
      const fetchAPI = async () => {
          try {
             
        setMasterData(await getAllMasterData());
  console.log("masterData" , getMasterData)
          } catch (error) {
              console.log(`Error ${error}`)
          }
         
      }
  
  
      fetchAPI(); 
  },[isUpdated]);

  const hanleChange = (e) => {
    const Tvalue = e.target;
    console.log(e.target)
    console.log(Tvalue.value == "")
    console.log(Tvalue.value)

    setFilter ( {
        fn: masterdataRecords => {
            if(Tvalue.value == "")
            {
                return masterdataRecords
            }
            else{
              console.log("filtering the records")
                return masterdataRecords.filter(x => x.switch_Type.includes(e.target.value) )
            }
        }

    })
}

    return (

    <>
        <Card style={{width : '90%' , height: '85%', marginLeft: "5vw"  , marginTop: "5px" }}>
  <Card.Body >
  <Form style={{display: "flex" ,  flexDirection: "row" }}>
  <Form.File 
    id="upload1"
    style= {{width:"200px", marginBottom: "10px" ,  flexGrow: 1}}
  />
      <Button  variant="secondary" size="sm" style={{borderRadius: "10" , marginBottom: "10px" 
  , flexGrow: 1, height: "40px" }}>Upload Ffile</Button>
 <div style= {{marginLeft: "20vw"}}></div>
  <Button variant="primary" size="sm" style={{borderRadius: "10" , marginBottom: "10px", 
  height: "40px" }}>Add New</Button>
 

 
</Form>
<Form>

<Form.Control type="text" placeholder="Search Grid"  style={{widht:"20px"}} onChange={hanleChange}/>
</Form>

<UseTable tableData= {getMasterData} TableHeads={headCells}></UseTable>
  


  </Card.Body>
</Card>

<Footer></Footer>
</>
    )
}
