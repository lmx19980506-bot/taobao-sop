import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home.jsx';
import WorkOrder from './pages/WorkOrder.jsx';
import Classification from './pages/Classification.jsx';
import Process from './pages/Process.jsx';
import SpecialCase from './pages/SpecialCase.jsx';
import RiskControl from './pages/RiskControl.jsx';
import DataAnalysis from './pages/DataAnalysis.jsx';
import DeploymentGuide from './pages/DeploymentGuide.jsx';

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-order" element={<WorkOrder />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/process" element={<Process />} />
          <Route path="/special" element={<SpecialCase />} />
          <Route path="/risk" element={<RiskControl />} />
          <Route path="/data" element={<DataAnalysis />} />
          <Route path="/deploy" element={<DeploymentGuide />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;