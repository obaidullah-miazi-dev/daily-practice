import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) => {
        // console.log('clicked',country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h1>Countries Length: {countries.length}</h1>
            <h1>Visited Country List: {visitedCountries.length}</h1>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='grid'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;