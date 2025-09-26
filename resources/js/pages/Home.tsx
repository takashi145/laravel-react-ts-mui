import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        setMessage(response.data.message);
      });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <p>{message}</p>
      <Button variant="contained" href="/about">About</Button>
    </>
  );
}
