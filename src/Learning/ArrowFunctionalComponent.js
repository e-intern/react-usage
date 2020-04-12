import React from 'react'

//rfac | rface ile export ayrı yazılıyor
//state barındırmıyorsa kullanılır
//functional komponentler render olmaz 
//arrow function ile de yazılır

const ArrowFunctionalComponent = (x) => {
    return (
        <div>
            <p>Arrow Functional Component</p>
            <p>{x.title} </p>
            <p>{x.children}</p>
        </div>
    )
}

export default ArrowFunctionalComponent