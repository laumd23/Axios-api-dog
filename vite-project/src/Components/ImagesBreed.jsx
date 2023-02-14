import axios from 'axios'
import { useEffect, useState } from 'react'

const ImagesBreed = () => {
  const [image, setImage] = useState([]);
  const [breed, setBreed] = useState('')
  const [inputValue, setInputValue] = useState('')

  const getAllImageBreed = async () => {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    setImage(res.data.message)
  }
  
  const render = image.map((img, index) => {
    return (
      <div key={`breed${index}`}>
        <img src={img} alt="" className='image-breed' />
      </div>
    )
  })
  
  const clickHandler = ()=>{
    setBreed (inputValue);
    console.log(breed)
  }
  
  useEffect(() => {
    getAllImageBreed()
  }, [breed])
  
  return (
    <>
      <div>
        <input
          type="text"
          name="breed" id=""
          placeholder='Ingrese una raza'
          onChange={(e)=> setInputValue(e.target.value)}
        />
        <button onClick={clickHandler} >Search</button>
      </div>
      <div className='imageBreed-container'>
        {render}
      </div>
    </>
  )
}

export default ImagesBreed