import React from 'react';

const Country = ({ country }) => {
    // console.log(country)
    return (
        <div className='countryStyle'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <div>
                <h3>Name: {country.name.common}</h3>
                <p>Capital: {country.capital.capital}</p>
                <p>Region: {country.region.region}</p>
            </div>
        </div>
    );
};

export default Country;