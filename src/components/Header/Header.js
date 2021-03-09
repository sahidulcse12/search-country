import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import './Header.css';

const Header = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <div className="search-field">
                <h2>Search Your Country</h2>
                {/* <input type="search" name="" id="" placeholder="Search Country....." />
                <button type="submit">Search</button> */}
            </div>
            <hr />
            <div className="header-design">
                {
                    countries.map(country => <Countries country={country}></Countries>)
                }
            </div>

        </div>
    );
};

export default Header;