import React from 'react';

function Welcome(props) {
    console.log(props.name)
    return <h1> Hello, {props.name}! </h1>
}

const MyComponent = (props) => {
    return (
        <div> 
            <h2><Welcome name= "Elwyn Nicole"></Welcome> This is a new component! {props.test} </h2>
            <h1> How are you today?</h1>
            <p> This is a simple React component.</p>

        </div>
    );
};

export default MyComponent;