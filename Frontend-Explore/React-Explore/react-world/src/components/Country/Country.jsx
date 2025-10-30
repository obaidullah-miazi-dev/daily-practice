import React, { useState } from 'react';

const Country = ({ country,handleVisitedCountries }) => {
    // console.log(country)
    const [visited,setVisited]= useState(false)
    
    const handleVisited= ()=>{
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`countryStyle ${visited ? 'country-visited':'country-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <div>
                <h3>Name: {country.name.common}</h3>
                <p>Capital: {country.capital.capital}</p>
                <p>Region: {country.region.region}</p>
                <button onClick={handleVisited}>{visited?'Visited':'Not Visited'}</button>
            </div>
        </div>
    );
};

export default Country;