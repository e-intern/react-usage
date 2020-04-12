import React, { Component } from 'react'
import UserCard from './UserCard';
import UserConsumer from './Context';

class UserList extends Component {
    render() {
        return (
            <UserConsumer>
                {value => {
                    const { users } = value;
                    console.log(users.length);
                    return (
                        users.length > 0 ?
                            users.map((user, index) => {
                                // console.log(user);
                                return (
                                    <UserCard
                                        key={index}
                                        id={user.id}
                                        fullname={user.fullname}
                                        department={user.department}
                                        salary={user.salary}
                                    />
                                )
                            })
                            : <h3 className="text-center">GÖSTERİLECEK KAYIT BULUNAMADI</h3>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default UserList;