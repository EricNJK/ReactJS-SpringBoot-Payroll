import React from "react";
import Employee from "./Employee";

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let employeeList = [];
        employeeList = this.props.employees.map(e => <Employee key={e._links.self.href} data={e}/>);

        return (<div>
            <h2>Employee List</h2>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {employeeList}
                <tr>
                    <td colSpan={2}><b>No. of employees</b></td>
                    <td>{this.props.employees.length}</td>
                </tr>
                </tbody>
            </table>
        </div>);
    }
}