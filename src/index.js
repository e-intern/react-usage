import React from 'react';
import ReactDOM from 'react-dom';

// import LearningApp from './Learning/LearningApp'
// ReactDOM.render(<LearningApp />, document.getElementById('root'));

// import ExampleApp from './Example/ExampleApp';
// ReactDOM.render(<ExampleApp/>, document.getElementById('root'))

// import ContextApp from './ContextAPI/ContextApp';
// import { UserProvider } from './ContextAPI/Context'
// ReactDOM.render(
//     <UserProvider>
//         <ContextApp />
//     </UserProvider>
//     , document.getElementById('root')
// )


// import ContextApp from './ContextAPIWithFakeRestAPI/ContextApp';
// import { UserProvider } from './ContextAPIWithFakeRestAPI/Context'
// ReactDOM.render(
//     <UserProvider>
//         <ContextApp />
//     </UserProvider>
//     , document.getElementById('root')
// )


import ContextApp from './ContextAPIWithRouterFakeRestAPI/ContextApp';
import { UserProvider } from './ContextAPIWithRouterFakeRestAPI/Context'
ReactDOM.render(
    <UserProvider>
        <ContextApp />
    </UserProvider>
    , document.getElementById('root')
)