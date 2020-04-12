import React, { Component } from 'react'
import UserConsumer from './Context'
import axios from 'axios';
// var uniqid = require("uniqid");

class CreateUser extends Component {
    state = {
        fullname: "",
        salary: "",
        department: ""
    }

    ChangeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    AddUser = async (dispatch, e) => {
        e.preventDefault(); //sayfa post/get olmasın diye

        const { fullname, department, salary } = this.state;

        const newUser = {
            // id: uniqid(),
            fullname,
            salary,
            department
        }

        this.setState({
            fullname: "",
            salary: "",
            department: ""
        })

        var addedResponse = await axios.post(`http://localhost:3005/users`, newUser);
        dispatch({ type: "ADD_USER", payload: addedResponse.data });
    }

    render() {
        const { fullname, salary, department } = this.state;

        return (
            <UserConsumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">
                                    Kullanıcı Ekle
                                    </h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.AddUser.bind(this, dispatch)}>
                                    <div className="form-group row">
                                        <label htmlFor="fullname" className="col-4 col-form-label">Adı Soyadı</label>
                                        <div className="col-8">
                                            <input
                                                id="fullname"
                                                className="form-control"
                                                placeholder="enter fullname"
                                                value={fullname}
                                                onChange={this.ChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="departmentName" className="col-4 col-form-label">Birim</label>
                                        <div className="col-8">
                                            <input
                                                id="department"
                                                className="form-control"
                                                placeholder="departman yazın"
                                                value={department}
                                                onChange={this.ChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="salary" className="col-4 col-form-label">Maaş</label>
                                        <div className="col-8">
                                            <input
                                                id="salary"
                                                className="form-control"
                                                placeholder="maaş girin"
                                                value={salary}
                                                onChange={this.ChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <button className="offset-4 col-4 btn btn-danger">Ekle</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </UserConsumer>
        )
    }
}
export default CreateUser;