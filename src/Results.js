import React from 'react';
import ReactTable from 'react-table';
import './react-table.css';
import './App.css';
import { MdRemoveCircle } from 'react-icons/lib/md';
import mockData from './MOCK_DATA.json';
import mockData2 from './MOCK_DATA_2.json';
// import Fetch from 'react-fetch';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDelete: false,
            data: mockData,
            data2: mockData2,
            displayData1: mockData,
            displayData2: mockData2
        }
    
        this.delete = this.delete.bind(this);
        this.totalHourSum = this.totalHourSum.bind(this);
        this.setData = this.setData.bind(this);
        this.setDisplayData = this.setDisplayData.bind(this);

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

    setDisplayData(data){
        if(this.props.displayScreen){
            this.setState({
                displayData1: data
            })
        } else {
            this.setState({
                displayData2: data
            })
        }
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
                    resizeable: 'false',
                    filterable: 'true',
                    filterAll: 'true',
                    
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginLeft: '10px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px', marginLeft: '10px'}
                }, {
                    Header: 'email address',
                    accessor: 'email',
                    minWidth: 350,
                    resizeable: 'false',
                    filterable: 'true',
                    filterAll: 'true',
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px',} 
                }, {
                    Header: 'last volunteer date',
                    accessor: 'lastDate',
                    minWidth: 100,
                    resizeable: 'false',
                    filterable: 'true',
                    filterAll: 'true',
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px',}
                }, {
                    Header: 'total hours', 
                    accessor: 'totalHours',
                    minWidth: 75,
                    resizeable: 'false',
                    filterable: 'true',
                    filterAll: 'true',
                    filterMethod: (filter, arr) => {
                        let resultArray = [{name: "Filtered Total Hours", email: "n/a", lastDate: "n/a", totalHours: 0}];
                        let comp = String(filter.value).charAt(0);
                        let num = parseInt(String(filter.value).substr(1,), 10)
                        if(Number.isInteger(num) && !(String(filter.value).length > 1)){
                            resultArray = this.props.displayScreen ? this.state.data : this.state.data2;
                        } else {
                            for(var i = 0; i<arr.length; i++){
                                if(arr[i]['name'] === "Filtered Total Hours"){
                                    continue;
                                }
                                if(comp === '>') {
                                    if(arr[i][filter.id] > parseInt(String(filter.value).substr(1,), 10)) {
                                        resultArray.push(arr[i]);
                                    }
                                }
                                else if(comp === '<') {
                                    if(arr[i][filter.id] < parseInt(String(filter.value).substr(1,),10)) {
                                        resultArray.push(arr[i]);
                                    }
                                }
                                else {
                                    //console.log(arr[i][filter.id])
                                    if(arr[i][filter.id] === parseInt(String(filter.value),10)){
                                        resultArray.push(arr[i]);
                                    }
                                }
                            }
                            let filterTotal = 0;
                            for(let j = 0; j < resultArray.length; j++){
                                filterTotal += resultArray[j]['totalHours'];
                            }
                            resultArray[0]['totalHours'] = filterTotal;
                        }                        
                        return resultArray;
                    },
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', minWidth: '20px', marginRight: '10px'},
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
                        minWidth: 100,
                        filterable: 'true',
                        filterAll: 'true',
                        // filterMethod: (filter, row) =>
                        //     String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                        headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginLeft: '10px',},
                        style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px', marginLeft: '10px',}
                    }, {
                        Header: 'name',
                        accessor: 'name',
                        minWidth: 300,
                        filterable: 'true',
                        filterAll: 'true',
                        // filterMethod: (filter, row) =>
                        //     String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                        headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px',},
                        style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px',}                       
                    }, {
                        Header: 'email address',
                        accessor: 'email',
                        minWidth: 400,
                        filterable: 'true',
                        filterAll: 'true',
                        // filterMethod: (filter, row) =>
                        //     String(row[filter.id]).toLowerCase().includes(String(filter.value).toLowerCase()),
                        headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px'},
                        style: {textAlign: 'left', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px'}
                    }, {
                        Header: 'daily hours',
                        accessor: 'hours',
                        minWidth: 100,
                        filterable: 'true',
                        filterAll: 'true',
                        filterMethod: (filter, arr) => {
                            let resultArray = [{name: "Filtered Total Hours", email: "n/a", date: "n/a", hours: 0, delete: 'n/a'}];
                            let comp = String(filter.value).charAt(0);
                            let num = parseInt(String(filter.value).substr(1,), 10)
                            if(Number.isInteger(num) && !(String(filter.value).length > 1)){
                                resultArray = this.props.displayScreen ? this.state.data : this.state.data2;
                            } else {
                                for(let i=0; i < arr.length; i++){
                                    if(arr[i]['name'] === "Filtered Total Hours"){
                                        continue;
                                    }
                                    if(comp === '>'){
                                    console.log(parseInt(String(filter.value).substr(1,),10))
                                        if(arr[i][filter.id] > parseInt(String(filter.value).substr(1,), 10)){
                                            resultArray.push(arr[i]);
                                        }
                                    }
                                    else if(comp === '<'){
                                        if(arr[i][filter.id] < parseInt(String(filter.value).substr(1,),10)){
                                            resultArray.push(arr[i]);
                                        }
                                    }
                                    else{
                                        if(arr[i][filter.id] === parseInt(String(filter.value),10)){
                                            resultArray.push(arr[i]);   
                                        }
                                    }
                                }
                                let resultSum = 0;
                                for(let j=0; j<resultArray.length; j++){
                                    resultSum += resultArray[j]['hours'];
                                }
                                console.log(resultSum)
                                resultArray[0]['hours'] = resultSum; 
                            }
                            return resultArray;

                        },
                        headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px'},
                        style: {alignItems: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', fontWeight: 'bold'}                        
                    }, {
                    Header: '',
                    accessor: 'delete',
                    sortable: false,
                    minWidth: 50,
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginRight: '10px'},
                    style: {alignItems: 'center', borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', marginRight: '10px'},
                    Cell: ({ value }) => value === 'n/a' ? null : <div className = "Delete-icon"><MdRemoveCircle style={{width: '24px',height: '24px'}} tabIndex={0}/></div>
                }
                ],
                style: {textAlign: 'left'}
            }
        ];
        let tableData = this.props.displayScreen ? this.state.displayData1 : this.state.displayData2;
        let tableColumns = this.props.displayScreen ? columns : columns2;
        return(
            <div> 
                {/*<Fetch url="http://www.academicstudysolutions.com/pawsstripes/get.php?action=fullreport" options={{mode:'no-cors'}}>
                    <TestComponent/>
                </Fetch>*/}
                        
                <ReactTable
                    minRows={10}
                    data={tableData}
                    columns={tableColumns}
                    defaultPageSize={10}
                    defaultFilterMethod={ (filter, arr) =>{
                        let resultArray = [{name: "Filtered Total Hours", email: "n/a", lastDate: "n/a", totalHours: 0, date: 'n/a', hours: 0, delete: 'n/a'}]
                        for(let i=0; i< arr.length; i++){
                            if (String(arr[i][filter.id]).toLowerCase().includes(String(filter.value).toLowerCase())){
                                resultArray.push(arr[i]);
                            }
                        }
                        
                        let resultSumTH = 0;
                        let resultSumH = 0;
                        for(let j=0; j<resultArray.length; j++){
                            resultSumTH += resultArray[j]['totalHours'];
                            resultSumH += resultArray[j]['hours']
                        }
                        resultArray[0]['totalHours'] = resultSumTH;
                        resultArray[0]['hours'] = resultSumH;
                        return resultArray;
                    }}
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