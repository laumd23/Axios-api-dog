import { useEffect, useState } from 'react';
import axios from 'axios';

const Breeds = () => {
  const [info, setInfo] = useState({})

  const getAllBreeds = async () => {
    const res = await axios.get('https://dog.ceo/api/breeds/list/all')
    setInfo(res.data.message);
  }
  
  useEffect(() => {
    getAllBreeds()
  },[]);

  const key = Object.keys(info)
  const render =  key.map((e)=>{
    return (
      <p key={`breed${e}`}>{e}</p>
    )
    })
  

  return (
    <div className='breeds-container'>
      <h2>LIST ALL BREEDS</h2>
      <div>
        {render}
      </div>
    </div>
  )
}

export default Breeds;