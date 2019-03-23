import React from 'react';
import logo from '../logo.svg';
import './Header.css';

// function header(){
//     return (
        //         <header>
        //             <img src={logo} alt="react-logo" className="App-logo" />
        //             <h1>My first create-react-app!</h1>
        //         </header>
        //     )
// }

// the following is the same as above just using ES6 syntax

const header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className="App-logo" />
            <h1>My first create-react-app!</h1>
        </header>
    )
}

export default header;