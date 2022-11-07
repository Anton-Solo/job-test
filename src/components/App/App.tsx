import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from '../../containers/JobList/JobList';
import JobDetails from '../../containers/JobDetails/JobDetails';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<JobList />} />
          <Route path=":id" element={<JobDetails />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
