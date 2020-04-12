import React, { Component } from 'react'
import Navbar from './Navbar'
import UserList from "./UserList"
import EditUser from "./EditUser"
import CreateUser from "./CreateUser"
import NotFound from './NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserProfile from './UserProfile';


class ContextApp extends Component {
    render() {
        return (
            <Router>
                <div className="container mt-4">
                    <Navbar title="react js example" />
                    <hr />
                    <Switch>
                        <Route exact path="/" render={() => { return <p>Home</p> }} />
                        <Route exact path="/users" component={UserList} />
                        <Route exact path="/add-user" component={CreateUser} />
                        <Route exact path="/edit-user/:id" component={EditUser} />
                        <Route exact path="/detail-user/:id" component={UserProfile} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default ContextApp;