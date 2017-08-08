import React from 'react';
import ReactTable from 'react-table';
import '../node_modules/react-table/react-table.css'


class Results extends React.Component {
    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
            name: 'Jason Maurer',
            age: 23,
            }
        },
        {
            name: 'Robert Spidle',
            age: 32,
            friend: {
                name: 'Joe Chacon',
                age: 26,
            }
        }];
    
        const columns = [
        {
            Header: "",
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name' // String-based value accessors! 
                }, {
                    Header: 'Age',
                    accessor: 'age',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
                }, {
                    id: 'friendName', // Required because our accessor is not a string 
                    Header: 'Friend Name',
                    accessor: d => d.friend.name // Custom value accessors! 
                }, {
                    Header: props => <span>Friend Age</span>, // Custom header components! 
                    accessor: 'friend.age'
                }]
        }];
        
        return(               
                <ReactTable
                    data={data}
                    columns={columns}
                    className="ReactTable -highlight"
                />
        )
    }
}

export default Results;