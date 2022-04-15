import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Main } from './components/Main';
import axios from 'axios'
import { Auth } from './components/Auth';
import { Create } from './components/Create';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';

function App() {

  const [plants, setPlants] = useState();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const getPlants = async () => {
      const res = await axios.get('http://localhost:3001/getAllPlants')
      setPlants(res.data);
    }

    getPlants();
  }, [])

  console.log(plants);
  console.log(cart);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} cart={cart} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Main user={user} setUser={setUser} cart={cart} setCart={setCart}/>} />
          <Route path="login/" element={<Auth user={user} setUser={setUser}/>} />
          <Route path="create/" element={<Create/>} />
          <Route path="cart/" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
