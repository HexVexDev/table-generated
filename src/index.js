import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/login/login.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ReportResults from "./components/reportResults/reportResults.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path='/reportResults' element={<ReportResults/>}/>
        </Routes>
    </BrowserRouter>
);
