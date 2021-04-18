import React from 'react';

const Country = (props) => {
    console.log(props)
    return (
        <div>
            <img style={props.style} src={props.flag}></img>
        </div>
    );
};

export default Country;