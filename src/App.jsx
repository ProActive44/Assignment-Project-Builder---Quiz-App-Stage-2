import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";
import data from "./resources/quizQuestions.json";

class App extends Component {
  render() {
    return (
      <div>
        {/* <HomeComponent /> */}
        <QuizComponent data={data}/>
        {/* <ResultComponent/> */}
      </div>
    );
  }
}

export default App;
