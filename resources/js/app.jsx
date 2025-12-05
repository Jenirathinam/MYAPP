import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import BasicDetail from "./components/BasicDetail";
import DocumentDetails from "./components/DocumentDetail"
import AddressDetails from "./components/AddressDetails";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/basic-details" element={<BasicDetail />} />
                <Route path="/address" element={<AddressDetails />} />
                <Route path="/doc-details" element={<DocumentDetails />} />
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
