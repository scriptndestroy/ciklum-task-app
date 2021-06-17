
// import logo from './logo.svg';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import './index.css';
import React from 'react';
import Tasks from './components/Tasks/Tasks';



function App() {
  return (
    <div className="p-p-6">
      <Tasks />
    </div>
  );
}

export default App;
