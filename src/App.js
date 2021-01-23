import React, { useEffect, useState } from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar/Navbar';
import GetUser from './Components/GetUser';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from './GraphQl/Queries';
//import Queries from "./GraphQl/Queries";
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { data } = useQuery(LOAD_USERS);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (data) {
      setJobs(data.jobs);
    }
  }, [data]);

  return (
    <>
      <Navbar />
      <GetUser jobs={jobs} />
      <Footer />
    </>
  );
};

export default App;
