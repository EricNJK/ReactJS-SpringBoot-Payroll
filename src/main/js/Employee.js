import React from "react";

export default class Employee extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr key={this.props.data._links.self.href}>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.description}</td>
            </tr>
        );
    }
}