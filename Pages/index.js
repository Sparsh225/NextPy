// pages/index.js
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/hello');
      setData(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to NextPyapp</h1>
      <button onClick={fetchData}>Fetch Data from Python</button>
      {data && <p>Data from Python: {data}</p>}
    </div>
  );
};

export default Home;
