import React, { Component } from 'react'
import Navbar from './Navbar'
import UserList from './UserList'

class ExampleApp extends Component {
    state = {
        kullanicilar: [
            { id: "1", adi_soyadi: "ümit karabacak 1", maas: "1500", birim: "IT" },
            { id: "2", adi_soyadi: "ümit karabacak 2", maas: "2500", birim: "HR" },
            { id: "3", adi_soyadi: "ümit karabacak 3", maas: "3500", birim: "HR" },
            { id: "4", adi_soyadi: "ümit karabacak 4", maas: "4500", birim: "IT" },
        ]
    }

    render() {

        return (
            <div className="container" >
                <Navbar title="Ümit Karabacak" />
                <UserList users={this.state.kullanicilar} />
            </div>
        )
    }
}

export default ExampleApp;