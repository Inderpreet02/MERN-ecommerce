import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Main } from './components/Main';
import axios from 'axios'

function App() {

  const [plants, setPlants] = useState();

  useEffect(() => {

    const getPlants = async () => {
      const res = await axios.get('http://localhost:3001/getAllPlants')
      setPlants(res.data);
    }

    getPlants();
  }, [])

  console.log(plants);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="products/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
