import React from 'react';
import { useHistory } from 'react-router';
import './Countries.css';

const Countries = (props) => {

    const { name, flag, alpha3Code } = props.country;

    const history = useHistory();

    const handleCountry = (alpha3Code) => {
        const url = `/country/${alpha3Code}`;
        history.push(url);
    }

    return (
        <div className="country-design">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <button onClick={() => handleCountry(alpha3Code)}>Country Details</button>
        </div>
    );
};

export default Countries;