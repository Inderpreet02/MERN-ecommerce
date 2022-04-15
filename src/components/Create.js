import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css'
export const Create = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3001/createAngiosperm',{
        name: name,
        price: price,
        img: img,
        description: description,
        category: "Angiosperm"
    })
    .then((res) => {
      console.log(res.data);
    })

    navigate('/')
    
  }

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3001/createByophytes',{
        name: name,
        price: price,
        img: img,
        description: description,
        category: "Bryophyte"
    })
    .then((res) => {
        alert(' created');
    })
    navigate('/')
    
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3001/createGymnosperm',{
        name: name,
        price: price,
        img: img,
        description: description,
        category: "Gymnosperm"
    })
    .then((res) => {
        alert('created');
    })
    navigate('/')
    
  }

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3001/createPteridophytes',{
        name: name,
        price: price,
        img: img,
        description: description,
        category: "Pteridophytes"
    })
    .then((res) => {
        alert(' created');
    })
    navigate('/')
    
  }
  return (
    <div className='create'>
        <div className="create__container">
            <h1>Create</h1>
            
            <input type="text" required className="auth__input" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" required className="auth__input" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" required className="auth__input" placeholder='img URL' value={img} onChange={(e) => setImg(e.target.value)}/>
            <textarea name="" id="" required cols="30" rows="10" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
          
            <button className="btn" onClick={handleSubmit}>Create Angiosperm</button>
            <button className="btn" onClick={handleSubmit1}>Create Bryophyte</button>
            <button className="btn" onClick={handleSubmit2}>Create Gymnosperm</button>
            <button className="btn" onClick={handleSubmit3}>Create Pteridophytes</button>
        </div>
    </div>
  )
}
