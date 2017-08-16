import React from 'react';
import ReactTable from 'react-table';
import './react-table.css';
import './App.css';
import { MdRemoveCircle } from 'react-icons/lib/md';
// import Fetch from 'react-fetch';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDelete: false,
        }
        this.delete = this.delete.bind(this);
    }

    delete(name, email, date, hours) {
        console.log("Name: " + name + " Email: " + email + " Date: " + date + " Hours " + hours);
    }



    render() {
        const data = [
            {
                name: 'Tanner Linsley',
                email: 'tanner.linsley@ruralsourcing.com',
                lastDate: '08-08-2017',
                totalHours: 16,
                delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
            },
            {
                name: 'Robert Spidle',
                email: 'robert.spidle@ruralsourcingandthelongestemaildomainever.com',
                lastDate: '07-31-2017',
                totalHours: 50,
                delete: <div className = "Delete-icon"><MdRemoveCircle style={{  width: '24px',height: '24px'}} tabIndex={0}/></div>
            },
            {
                name: 'Joe Chacon',
                email: 'joe.chacon@ruralsourcing.com',
                lastDate: (new Date().toISOString().substr(5,2)) + '-' + (new Date().toISOString().substr(8,2)) + '-' + (new Date().toISOString().substr(0,4)),
                totalHours: 80,
                delete: <div className = "Delete-icon" id='delete'><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0} id='delete'/></div>                
            }
        ];
    
        const columns = [
        {
            Header: "",
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name',
                    minWidth: 350,
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginLeft: '10px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px', marginLeft: '10px',}
                }, {
                    Header: 'email',
                    accessor: 'email',
                    minWidth: 350,
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px',} 
                }, {
                    Header: 'last volunteer date',
                    accessor: 'lastDate',
                    minWidth: 100,
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px',}
                }, {
                    Header: 'total hours', 
                    accessor: 'totalHours',
                    minWidth: 75,
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', minWidth: '20'},
                    style: {fontWeight: 'bold', textAlign: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px',}
                    
                }, {
                    Header: '',
                    accessor: 'delete',
                    sortable: false,
                    minWidth: 50,
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginRight: '10px'},
                    style: {alignItems: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', marginRight: '10px'}
                }],
                style: {textAlign: 'left'}
        }];
        
        return(
            <div> 
                {/*<Fetch url="http://www.academicstudysolutions.com/pawsstripes/get.php?action=fullreport" options={{mode:'no-cors'}}>
                    <TestComponent/>
                </Fetch>*/}
                        
                <ReactTable
                    minRows={data.length}
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-highlight"
                    getTdProps={(state,rowInfo,column, instance) => {
                        return{
                            onClick: (e) => {
                                console.log(rowInfo)
                                console.log(column)
                                if(column.id === 'delete'){
                                    var deleteBool = window.confirm("Are you sure you want to delete " + rowInfo.row.name + "'s record?")
                                    console.log(deleteBool)
                                    if (deleteBool){
                                        this.delete(rowInfo.row.name, rowInfo.row.email, rowInfo.row.lastDate, rowInfo.row.totalHours)
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default Results;


// class TestComponent extends React.Component {
//     render() {
//         console.log(this.props);
//         return <div/>
//     }
// }