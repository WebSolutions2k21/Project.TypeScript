import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { RegistrationForm } from "./components/Registration";
import Footer from "components/Footer";
import Login from 'components/Login/Login';

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
      hello
      <Login/>
      <RegistrationForm />
      <Footer />
    </div>
  );

}

export default App;
