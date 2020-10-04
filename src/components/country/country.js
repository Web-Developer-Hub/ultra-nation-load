import React from 'react';
import './country.css'

const Country = (props) => {
const {flag, name, area, languages, population, altSpellings, borders, currencies, region} = props.country

    return (
        <div className='details'>
            <img src={flag} alt="hello world"/>
            <h2>Country Name : {name}</h2>
            <h2>Region : {region}</h2>
            <h2>population : {population}</h2>
            <h2>Area : {area}</h2>
            <h2>languages : {languages[0].name}</h2>
            <h2>altSpellings : {altSpellings[0]}, <span>{altSpellings[1]}</span> </h2>
            <h2>Borders : {borders[0]}</h2>
            <h2>Currencies : {currencies[0].code}, {currencies[0].name}, {currencies[0].symbol}</h2>
        
        </div>
    );
};

export default Country;