import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserPropTypes extends Component {

    static defaultProps = {
        statikBaslik: "sabit"
    }

    render() {
        const { title, statikBaslik } = this.props;
        return (
            <div>
                <i className="fas fa-trash-alt"></i>
                <p> {title} </p>
                <p> {statikBaslik} </p>
            </div>
        )
    }
}

UserPropTypes.defaultProps = {
    title: "un title"
}

UserPropTypes.propTypes = {
    title: PropTypes.string.isRequired
}

export default UserPropTypes;