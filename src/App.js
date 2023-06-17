import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
