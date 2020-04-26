import React, { Component } from 'react'
import UserConsumer from './Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserCard extends Component {
    state = {
        isVisible: false
    }

    ChangeVisible = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    DeleteUser = async (dispatch, e) => {
        const { id, fullname } = this.props;

        if (!window.confirm(`${fullname} ait bilgileri silmek istediğinizden emin misiniz ?`))
            return;

        await axios.delete(`http://localhost:3005/users/${id}`);
        dispatch({ type: "DELETE_USER", payload: id });
    }

    render() {
        const { id, fullname, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h4 className="d-inline" onClick={this.ChangeVisible}> {fullname.toUpperCase()} </h4>
                                    <i onClick={this.DeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                </div>
                                {isVisible
                                    ? <div className="card-body" >
                                        <p className="card-text">Departman: {department}</p>
                                        <p className="card-text">Maaş: {salary}</p>
                                        <Link to={`detail-user/${id}`} className="btn btn-warning " >Detaya git</Link>
                                        <Link to={`edit-user/${id}`} className="btn btn-info  float-right" >Düzenle</Link>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>)
                }}
            </UserConsumer>

        )
    }
}

export default UserCard