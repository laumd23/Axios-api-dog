import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageRandom = () => {
  const [image, setImage] = useState ('');

  const getImageRandom = async ()=>{
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setImage(res.data.message);
  }

  useEffect(()=>{
    getImageRandom();
  },[])

  return (
    <div className='image-container'>
      <h2>ImageRandom</h2>
      <img src={image} alt="" className='image'/>
    </div>
  )
}

export default ImageRandom