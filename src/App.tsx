import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

// import { RegistrationForm } from "./components/Registration";
// import Footer from "components/Footer";
import { AboutUsPage } from './pages';
import { paths } from './config/paths';

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
    <Routes>
      <Route
       path={paths.aboutUs}
        element={
          <AboutUsPage />
        }
      />
    </Routes>
    // <div>
    //   hello!
    //   <RegistrationForm />
    //   <Footer />
    // </div>
  );

}

export default App;
