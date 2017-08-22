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
            data: [
                {
                    name: 'Tanner Linsley',
                    email: 'tanner.linsley@ruralsourcing.com',
                    lastDate: '08-08-2017',
                    totalHours: 16,
                    //delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    name: 'Robert Spidle',
                    email: 'robert.spidle@ruralsourcingandthelongestemaildomainever.com',
                    lastDate: '07-31-2017',
                    totalHours: 50,
                    //delete: <div className = "Delete-icon"><MdRemoveCircle style={{  width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    name: 'Joe Chacon',
                    email: 'joe.chacon@ruralsourcing.com',
                    lastDate: (new Date().toISOString().substr(5,2)) + '-' + (new Date().toISOString().substr(8,2)) + '-' + (new Date().toISOString().substr(0,4)),
                    totalHours: 80,
                    //delete: <div className = "Delete-icon" id='delete'><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0} id='delete'/></div>                
                }
            ],
            data2: [
                {
                    date: '12/2/2017',
                    name: 'John Cairns',
                    email: 'john.cairns@ruralsourcing.com',
                    hours: 5,
                    delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    date: '12/1/2017',
                    name: 'John Cairns',
                    email: 'john.cairns@ruralsourcing.com',
                    hours: 4,
                    delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    date: '12/2/2017',
                    name: 'Robert Spidle',
                    email: 'robert.spidle@ruralsourcingandthelongestemaildomainever.com',
                    hours: 4,
                    delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    date: '12/1/2017',
                    name: 'Robert Spidle',
                    email: 'robert.spidle@ruralsourcingandthelongestemaildomainever.com',
                    hours: 4,
                    delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    date: '11/23/2017',
                    name: 'Joe Chacon',
                    email: 'joe.chacon@ruralsourcing.com',
                    hours: 12,
                    delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                },
                {
                    date: '1/23/2016',
                    name: 'Joe Chacon',
                    email: 'joe.chacon@ruralsourcing.com',
                    hours: 7,
                    delete: <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                }
            ]
        }
    
        this.delete = this.delete.bind(this);
        this.totalHourSum = this.totalHourSum.bind(this);
        this.setData = this.setData.bind(this);

    }
    
    componentDidMount(){
        this.totalHourSum(this.state.data);
    }

    delete(name, email, date, hours) {
        console.log("Name: " + name + " Email: " + email + " Date: " + date + " Hours " + hours);
    }

    totalHourSum(){
        //console.log(this.state.data);
        let hoursSum=0;
        let hoursSum2=0;
        let userCount = this.state.data.length;
        let userCount2 = this.state.data2.length;
        for(let i=0; i<userCount; i++){
            if(this.state.data[i].totalHours){
                //console.log(this.state.data[i]);
                hoursSum += this.state.data[i].totalHours;
                //console.log(hoursSum);
            }
        }
        for(let i=0; i<userCount2; i++){
            if(this.state.data2[i].hours){
                //console.log(this.state.data2[i]);
                hoursSum2 += this.state.data2[i].hours;
                //console.log(hoursSum2);
            }
        }
        this.props.setTotalHours(hoursSum, userCount, hoursSum2, userCount2);
    }

    setData(data){
        this.setState({
            data: data,
        })
    }


    render() {   
        const columns = [
        {
            Header: "",
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name',
                    minWidth: 350,
                    filterable: 'true',
                    filterMethod: (filter, row) =>
                        String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginLeft: '10px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px', marginLeft: '10px'}
                }, {
                    Header: 'email address',
                    accessor: 'email',
                    minWidth: 350,
                    filterable: 'true',
                    filterMethod: (filter, row) =>
                        String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px',} 
                }, {
                    Header: 'last volunteer date',
                    accessor: 'lastDate',
                    minWidth: 100,
                    filterable: 'true',
                    filterMethod: (filter, row) =>
                        String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px',}
                }, {
                    Header: 'total hours', 
                    accessor: 'totalHours',
                    minWidth: 75,
                    filterable: 'true',
                    filterMethod: (filter, row) => {
                        let comp = String(filter.value).charAt(0);
                        if(comp === '>'){
                        console.log(parseInt(String(filter.value).substr(1,),10))
                        return row[filter.id] > parseInt(String(filter.value).substr(1,), 10);
                        }
                        else if(comp === '<'){
                        return row[filter.id] < parseInt(String(filter.value).substr(1,),10);
                        }
                        else{
                        return row[filter.id] === parseInt(String(filter.value),10);
                        }
                    },
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', minWidth: '20', marginRight: '10px'},
                    style: {fontWeight: 'bold', textAlign: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', marginRight: '10px'}
                    
                }],
                style: {textAlign: 'left'}
        }];

        const columns2 = [
            {
                Header: "",
                columns: [
                    {
                        Header: 'Date',
                        accessor: 'date',
                        minWidth: 150,
                        filterable: 'true',
                        filterMethod: (filter, row) =>
                            String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                        headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginLeft: '10px',},
                        style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px', marginLeft: '10px',}
                    }, {
                        Header: 'name',
                        accessor: 'name',
                        minWidth: 300,
                        filterable: 'true',
                        filterMethod: (filter, row) =>
                            String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                        headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                        style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px',}                       
                    }, {
                        Header: 'email address',
                        accessor: 'email',
                        minWidth: 350,
                        filterable: 'true',
                        filterMethod: (filter, row) =>
                            String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                        headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px'},
                        style: {alignItems: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px'}
                    }, {
                        Header: 'daily hours',
                        accessor: 'hours',
                        minWidth: 100,
                        filterable: 'true',
                        filterMethod: (filter, row) => {
                        let comp = String(filter.value).charAt(0);
                            if(comp === '>'){
                            console.log(parseInt(String(filter.value).substr(1,),10))
                            return row[filter.id] > parseInt(String(filter.value).substr(1,), 10);
                            }
                            else if(comp === '<'){
                            return row[filter.id] < parseInt(String(filter.value).substr(1,),10);
                            }
                            else{
                            return row[filter.id] === parseInt(String(filter.value),10);
                            }
                        },
                        headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px'},
                        style: {alignItems: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', fontWeight: 'bold'}                        
                    }, {
                    Header: '',
                    accessor: 'delete',
                    sortable: false,
                    minWidth: 50,
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginRight: '10px'},
                    style: {alignItems: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', marginRight: '10px'}
                }
                ],
                style: {textAlign: 'left'}
            }
        ];
        let tableData = this.props.displayScreen ? this.state.data : this.state.data2;
        let tableColumns = this.props.displayScreen ? columns : columns2;
        return(
            <div> 
                {/*<Fetch url="http://www.academicstudysolutions.com/pawsstripes/get.php?action=fullreport" options={{mode:'no-cors'}}>
                    <TestComponent/>
                </Fetch>*/}
                        
                <ReactTable
                    minRows={this.state.data.length}
                    data={tableData}
                    columns={tableColumns}
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
                                        this.delete(rowInfo.row.name, rowInfo.row.email, rowInfo.row.date, rowInfo.row.hours)
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