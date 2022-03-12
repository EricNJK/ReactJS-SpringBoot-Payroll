import React from "react";
import EmployeeList from "./EmployeeList";
//import Client from "./client"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        fetch("http://localhost:8888/api/employees")
            .then(res => res.json())
            .then(res => {
                this.setState({employees: res._embedded.employees});
            });
    }

    render() {
        return (
            <div>
                <p>Hey there!<br/>This is a React component</p>
                <EmployeeList employees={this.state.employees}/>
            </div>);
    }
}
