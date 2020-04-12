import React from 'react';

//rfce | rfc ile export ayrı yazılıyor
//state barındırmıyorsa kullanılır
//functional komponentler render olmaz 

function FunctionalComponent(x) {
    return (
        <div>
            <p>Functional Component</p>
            <p>{x.title} </p>
            <p>{x.children}</p>
        </div>
    )
}

export default FunctionalComponent