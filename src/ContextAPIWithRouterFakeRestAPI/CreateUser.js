import React, { Component } from 'react'
import UserConsumer from './Context'
import axios from 'axios';

class CreateUser extends Component {
    
    state = {
        fullname: "",
        salary: "",
        department: "",
        error: false
    }

    ValidateForm = () => {
        const { fullname, salary, department } = this.state;
        if (fullname == "" | salary == "" | department == "")
            return false;
        return true;
    }

    ChangeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()
        })
    }

    AddUser = async (dispatch, e) => {
        e.preventDefault(); //sayfa post/get olmasın diye

        const { fullname, department, salary } = this.state;
        if (!this.ValidateForm()) {
            this.setState({
                error: true
            })
            return;
        }
        const newUser = {
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
        this.props.history.push("/users");
    }

    render() {
        const { fullname, salary, department, error } = this.state;

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
                                {
                                    error ?
                                        <div className="alert alert-danger">Bütün alanları doldurmak zorundasınız!</div>
                                        : null
                                }
                                <div className="alert alert-info ">
                                    Ekleme yapılırken kullanılan bütün harfler büyük harfe çevrilecektir.
                                </div>
                                <form autoComplete="false" onSubmit={this.AddUser.bind(this, dispatch)}>
                                    <div className="form-group row">
                                        <label htmlFor="fullname" className="col-4 col-form-label">Adı Soyadı</label>
                                        <div className="col-8">
                                            <input
                                                id="fullname"
                                                className="form-control"
                                                placeholder="ad soyad yazın"
                                                value={fullname}
                                                onChange={this.ChangeInput}
                                                required
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
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="salary" className="col-4 col-form-label">Maaş</label>
                                        <div className="col-8">
                                            <input
                                                id="salary"
                                                className="form-control"
                                                placeholder="maaş yazın"
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