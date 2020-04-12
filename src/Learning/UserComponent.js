import React, { Component } from 'react'

class UserComponent extends Component {
    render() {
        // <p>{this.props.fullname}</p> diye almak yerine 
        const { fullname, salary, department } = this.props;
        const { children } = this.props;
        return (
            <div>
                <p>User Component</p>
                <p>{fullname}</p>
                <p>{department}</p>
                <p>{salary}</p>
                <p>{children}</p>
            </div>
        )
    }
}

export default UserComponent;