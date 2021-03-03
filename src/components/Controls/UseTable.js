import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";



export default function useTable(props) {
    const{tableData, TableHeads} = props
    console.log({tableData})
    console.log({TableHeads})
    // const options = {
    //     page: 2,
    
    //     sizePerPageList: [
    //       {
    //         text: "5",
    //         value: 5,
    //       },
    //       {
    //         text: "10",
    //         value: 10,
    //       },
    //       {
    //         text: "All",
    //         value: tableData.length,
    //       },
    //     ],
    
    //     sizePerPage: 2,
    
    //     pageStartIndex: 0,
    
    //     paginationSize: 3,
    
    //     prePage: "Prev",
    
    //     nextPage: "Next",
    
    //     firstPage: "First",
    
    //     lastPage: "Last",
    //   };
      
          if(tableData.length > 0)  
          {
              return (
     
          <div  style= {{overflow: "auto" , height:"70vh"}}>
          <BootstrapTable
            
            responsive
              striped
              hover
              keyField="id"
              data={tableData}
              columns={TableHeads}
              filter={filterFactory()}
              pagination={paginationFactory()}
              oDataIndication="No Data to Display"
            ></BootstrapTable>
            </div>
            
         
        )
    }
    else
    {
        return (<h1>Error</h1>)
    }
    
}


