import React from 'react';
import ReactTable from 'react-table';
import '../node_modules/react-table/react-table.css'


class Results extends React.Component {
    render() {
        const data = [
            {
                name: 'Tanner Linsley',
                email: 'tanner.linsley@ruralsourcing.com',
                lastDate: '08-08-2017',
                totalHours: 16
            },
            {
                name: 'Robert Spidle',
                email: 'robert.spidle@ruralsourcing.com',
                lastDate: '07-08-2017',
                totalHours: 50
            },
            {
                name: 'Joe Chacon',
                email: 'joe.chacon@ruralsourcing.com',
                lastDate: (new Date().toISOString().substr(8,2)) + '-' + (new Date().toISOString().substr(5,2)) + '-' + (new Date().toISOString().substr(0,4)),
                totalHours: 80
            }
        ];
    
        const columns = [
        {
            Header: "",
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name',
                    minWidth: 40,
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginLeft: '10px'},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px', marginLeft: '10px'}, 
                }, {
                    Header: 'email',
                    accessor: 'email',
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px'},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px'}, 
                }, {
                    Header: 'last volunteer date',
                    accessor: 'lastDate',
                    headerStyle: {textAlign: 'left', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px'},
                    style: {textAlign: 'left',borderColor: 'lightgrey', borderStyle: 'none none outset none',borderWidth: '1px'},
                }, {
                    Header: 'total hours', 
                    accessor: 'totalHours',
                    headerStyle: {textAlign: 'center', borderColor: 'black', borderStyle: 'none none outset none', borderWidth: '2px', marginRight: '10px'},
                    style: {fontWeight: 'bold', textAlign: 'center',borderColor: 'lightgrey', borderStyle: 'none none outset none', borderWidth: '1px', marginRight: '10px'}
                }],
                style: {textAlign: 'left'}
        }];
        
        return(               
                <ReactTable
                    minRows={data.length + 1}
                    data={data}
                    columns={columns}
                    className="-highlight"
                />
        )
    }
}

export default Results;
