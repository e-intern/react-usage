import React, { Component } from 'react'
import UserCard from './UserCard';

class UserList extends Component {

    render() {
        const { users } = this.props;

        return (
            <div>
                {
                    //users üzerinde dönerken bir index ve user veriyor
                    users.map((user, index) => {
                        return (
                            <UserCard
                                key={index}
                                fullname={user.adi_soyadi}
                                department={user.birim}
                                salary={user.maas}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList;