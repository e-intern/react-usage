import React, { Component } from 'react'
import axios from 'axios'

class UserProfile extends Component {

    state = {
        fullname: "",
        department: "",
        salary: "",
        isResponse: null
    }

    componentWillMount = async () => {
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
        console.log(this.props.match); //ile request bilgilerini alabilirim
        const { isResponse, fullname, department, salary } = this.state;
        {
            return (isResponse === true ?
                <div className="card text-center">
                    <div className="card-header">{fullname.toUpperCase()}</div>
                    <div className="card-body">
                        <h5 className="card-title">{department}</h5>
                        <p className="card-text">{salary} ₺</p>
                    </div>
                </div> : <p>Kayıt bulunamadı</p>
            )
        }
    }
}
export default UserProfile;