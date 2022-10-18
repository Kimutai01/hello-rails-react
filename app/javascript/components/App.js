import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../redux/store";
import Greetings from "./Greetings";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Greetings />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
