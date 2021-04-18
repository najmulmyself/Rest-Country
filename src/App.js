import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

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
  const divStyle={
    border: '1px solid lightblue',
    padding: '5px'
  }
  const [cart, setCart] = useState([])
  const handleCountry = (country) =>{
    const newCart = [...cart,country]
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1> Total Country:  {country.length} </h1>
      <h4>Country added : {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {
      country.map(country => <Country handleCountry={handleCountry} divStyle={divStyle} style={style} country={country}></Country>)
      }
    </div>
  );
}

export default App;
