import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';

function App() {
  const [country,setCountry] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  }, [])
  const style={
    
      height:'80px',
      display:'block',
      margin:'10px auto',
      padding:'10px',
      border: '1px solid grey',
      cursor: 'pointer'
  }
  return (
    <div className="App">
      <h1> Total Country:  {country.length} </h1>
      {
      country.map(cnt => <Country style={style} flag={cnt.flag}></Country>)
      }
    </div>
  );
}

export default App;
