import React from 'react'

const Navbar = ({ title }) => {

    return (
        <h3 className="text-center mb-4 mt-4">
            {title.toUpperCase()}
        </h3>
    )
}

export default Navbar
