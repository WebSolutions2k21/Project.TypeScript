import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { RegistrationForm } from './components/Registration'

function App() {

  const [users, setUsers] = useState({ users: [] });

  // Exemple check that axios works
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/users');

      setUsers(result.data);
    };
    fetchData();
  }, []);
  console.log('users', users);

  return (
    <div>
      hello!
      <RegistrationForm />
    </div>
  );

}

export default App;
