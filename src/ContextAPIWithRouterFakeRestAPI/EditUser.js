import React, { Component } from 'react'
import UserConsumer from './Context'
import axios from 'axios';

class EditUser extends Component {
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
            [e.target.id]: e.target.value
        })
    }

    EditUser = async (dispatch, e) => {
        e.preventDefault(); //sayfa post/get olmasın diye

        const { fullname, department, salary } = this.state;
        if (!this.ValidateForm()) {
            this.setState({
                error: true
            })
            return;
        }

        const updateUser = {
            fullname,
            salary,
            department
        }

        this.setState({
            fullname: "",
            salary: "",
            department: ""
        })
        
        const { id } = this.props.match.params;
        var updatedResponse = await axios.put(`http://localhost:3005/users/${id}`, updateUser);
        dispatch({ type: "UPDATE_USER", payload: updatedResponse.data });
        this.props.history.push("/users");
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;

        var response = await axios.get(`http://localhost:3005/users/${id}`);
        if (response.status === 200) {
            // this.setState({
            //     isResponse: true,
            //     fullname: response.data.fullname,
            //     department: response.data.department,
            //     salary: response.data.salary,
            // })
            const { fullname, department, salary } = response.data;
            this.setState({
                fullname,
                department,
                salary,
                isResponse: true
            })
        }
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
                                    Kullanıcı Düzenle
                                </h3>
                            </div>
                            <div className="card-body">
                                {
                                    error ?
                                        <h3 className="text-danger">Bütün alanları doldurmak zorundasınız!</h3>
                                        : null
                                }
                                <form onSubmit={this.EditUser.bind(this, dispatch)}>
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
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <button className="offset-4 col-4 btn btn-info">Düzenle</button>
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
export default EditUser;