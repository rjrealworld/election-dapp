import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminSidebar from "./AdminSidebar";
import AddCandidate from "./AddCandidate";
import Phases from './Phases';
import CandidatesList from './CandidatesList';

const AdminDashboard = () => {
  return (
    <div className="dashboard" style={{ display: "flex" }}>
      <AdminSidebar />
      <Routes>
        <Route exact path="/" element={<AddCandidate />} />
        <Route path="/phases" element={<Phases />} />
        <Route path="/candidates-list" element={<CandidatesList />} />
        {/* <Route path="/register-voter" element={<RegisterVoter />} /> */}
        {/* <Route path="/vote-tally" element={<VoteTally />} /> */}
      </Routes>
    </div>
  );
}

export default AdminDashboard;