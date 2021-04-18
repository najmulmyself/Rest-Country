import React from 'react';

const Country = (props) => {
    const {flag,name,capital,region,population} = props.country;
    const handleCountry = props.handleCountry;
    return (
        <div style={props.divStyle}>
            <img style={props.style} src={flag}></img>
            <h2>{name}</h2>
            <h4>Capital : {capital}</h4>
            <h5>Region : {region}</h5>
            <p>Population :  {population}</p>
            <button onClick={() => handleCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;