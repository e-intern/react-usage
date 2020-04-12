import React, { Component } from 'react'
import Navbar from './Navbar'
import UserList from "./UserList"
import CreateUser from "./CreateUser"
// import LifeCycleTest from './LifeCycleTest'

class ContextApp extends Component {
    render() {
        return (
            <div className="container">
                {/* <LifeCycleTest value="GO INSPECT F12 LOOK TO LIFECYCLE OUTPUT" /> */}
                <hr />
                <Navbar title="react js example server" />
                <div className="row">
                    <div className="col-8">
                        <UserList />
                    </div>
                    <div className="col-4">
                        <CreateUser />
                    </div>
                </div>
            </div>
        )
    }
}
export default ContextApp;