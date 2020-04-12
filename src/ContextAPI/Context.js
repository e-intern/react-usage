import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => {
                    return action.payload !== user.id;
                })
            }
        case "ADD_USER":
            // console.log(action.type);
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}

export class UserProvider extends Component {

    state = {
        users: [
            { id: "1", fullname: "ümit karabacak 1", salary: "1500", department: "IT" },
            { id: "2", fullname: "ümit karabacak 2", salary: "2500", department: "HR" },
            { id: "3", fullname: "ümit karabacak 3", salary: "3500", department: "HR" },
            { id: "4", fullname: "ümit karabacak 4", salary: "4500", department: "IT" },
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;