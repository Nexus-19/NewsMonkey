import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import News from "./components/News";
import NavBar from "./components/NavBar";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API_KEY
  state = {
    progress: 10
  }

  setProgress=(progress) => {
    this.setState({progress:progress})
  };

  render() {
    let pages = [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ];
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" pageSize={20} country="in" category="general" setProgress={this.setProgress} apiKey={this.apiKey} />}
            />
          </Routes>
          {pages.map((page) => {
            return (
              <Routes>
                <Route
                  exact
                  path={"/" + page}
                  element={
                    <News
                      key={page}
                      pageSize={12}
                      country="in"
                      category={page}
                      setProgress={this.setProgress}
                      apiKey={this.apiKey}
                    />
                  }
                />
              </Routes>
            );
          })}
        </Router>
      </div>
    );
  }
}
