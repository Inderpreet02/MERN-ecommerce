import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from './Card';

export const Section3 = ( { cart ,setCart} ) => {

    const [plants, setPlants] = useState();
    useEffect(() => {

        const getPlants = async () => {
        const res = await axios.get('http://localhost:3001/getAllPteridophytes')
        setPlants(res.data);
        }
    
        getPlants();
    
    }, [])

    console.log(plants);
  return (
    <div className='section'>
        <h1>Pteridophytes</h1>

        <div className="section__main">
            {
                plants?.map(plant => (
                    <Card cart={cart} setCart={setCart} id={plant._id} img={plant.img} name={plant.name} price={plant.price} description={plant.description} />
                ))
            }
        </div>
    </div>
  )
}
