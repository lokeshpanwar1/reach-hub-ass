
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lichess.org/api/player');
        setData(response.data.bullet)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
    <h1>Name:</h1>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.username}</li>
      ))}
    </ul>

    <h1>Rating:</h1>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.perfs.bullet.rating}</li>
      ))}
    </ul>
  </div>
  );
}

export default App;
