import React, { Component } from 'react'
import UserConsumer from './Context'

class UserCard extends Component {
    state = {
        isVisible: false
    }

    ChangeVisible = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    DeleteUser = (dispatch, e) => {
        const { id } = this.props;
        dispatch({ type: "DELETE_USER", payload: id });
    }

    render() {
        const { fullname, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="mb-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.ChangeVisible}> {fullname} </h4>
                                        <i onClick={this.DeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </div>
                                    {isVisible
                                        ? <div className="card-body">
                                            <p className="card-text">Departman: {department}</p>
                                            <p className="card-text">Maaş: {salary}</p>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>

                        )
                    }
                }
            </UserConsumer>

        )
    }
}

export default UserCard