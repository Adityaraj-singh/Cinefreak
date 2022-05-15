import React from "react";
import ReactDOM from "react-dom";
import SearchMovie from "./SearchMovie";
import "./Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="container1">
        <h1 className="title">React Movie Search</h1>
        <BrowserRouter className="routers">
          <Routes>
            <Route path="/" element={<SearchMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
