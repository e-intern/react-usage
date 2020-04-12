import React, { Component } from 'react'

class UserCard extends Component {
    state = {
        //ctor'da this.state olarak kullanılabilir
        isVisible: false
    }

    // constructor(props) {
    //     super(props);
    //     // onClick={this.onCustomClick} 
    //     // ile birlikte kullanılır component bind için kullanılır.
    //     // this.onCustomClick = this.onCustomClick.bind(this);
    // }

    // onClick={this.onCustomClick} 
    // ile birlikte kullanılır component bind için kullanılır.
    // this.onCustomClick = this.onCustomClick.bind(this);
    // consturctor tanımlaması gerektirir.
    // onCustomClick(e) {
    //     console.log(this);
    //     console.log(e);
    // }

    // // onClick={this.onCustomClick} 
    // // ile birlikte kullanılır
    // onCustomClick(e) {
    //     console.log(this); //user gelmez
    //     console.log(e);
    // }

    // // onClick={this.onCustomClick.bind(this)}
    // // ile birlikte kullanılır gönderilen this ise component'i temsil eder.
    // onCustomClick(e) {
    //     console.log(e);
    //     console.log(this); /user gelmez
    // }

    // ChangeVisibleWithParams = (param, e) => {
    //     //ilk gelenler parametre olabilir
    // }

    ChangeVisible = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        const { fullname, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between" onClick={this.ChangeVisible}>
                        <h4 className="d-inline"
                        // onClick={this.onCustomClick}
                        // onClick={this.onCustomClick.bind(this)}
                        // onClick={this.ChangeVisibleWithParams.bind(this, 45)}
                        >{fullname} </h4>
                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                    </div>
                    {
                        isVisible ?
                            <div className="card-body">
                                <p className="card-text">Departman: {department}</p>
                                <p className="card-text">Maaş: {salary}</p>
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}

export default UserCard