import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/country/country';

function App() {
 const [countries, setCountries] = useState([]);
 useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(respons => respons.json())
      .then(data => setCountries(data))
 }, [])
  return (
    <div className="App">
      <h1 style = {{color:'white'}}>All Countries data loaded : {countries.length}</h1>
      <ul>
        {
          countries.map(country => <Country country = {country} key = {country.alpha3Code}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
