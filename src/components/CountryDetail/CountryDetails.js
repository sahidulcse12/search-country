import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Country = () => {

    const { alpha3Code } = useParams();

    const [countryDetail, setCountryDetail] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
            .then(res => res.json())
            .then(data => setCountryDetail(data));
    }, [])
    console.log(countryDetail)

    return (
        <div>
            <h2>{countryDetail.name}</h2>
        </div>
    );
};

export default Country;