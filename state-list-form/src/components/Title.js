import React from 'react';

const title = props => {
    // props is an object and to access its properties we have
    // to use dot notation
    // console.log('props: ', props);
    return (
        <div>{ props.message }</div>
    )
}

// one-line solution:

//           destrucuture 
//              props      arrow func => explicit return
//                |         |
// const title = ({message}) => <div>{ message }</div>


export default title;
