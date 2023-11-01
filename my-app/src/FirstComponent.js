import React from 'react';


function OurFirstComponent(props) {
    return (
        <h1>
            <p>Привіт: {props.name}</p>
            <p>Це - {props.data}!</p>
        </h1>
    );
}

export default OurFirstComponent;