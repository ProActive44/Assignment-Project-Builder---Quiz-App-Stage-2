import React, { Component } from "react";
import './ResultComponent.css'

class ResultComponent extends Component {
  render() {
    return (
      <div className="resultContainer">
        <div className="resultTitle">Result</div>
        <div className="resultDescription">
          <div>You Need more practice!</div>
          <div>Your Score is 20%</div>
          <div className="questionsList">
            <div>
              <p>Total number of questions</p>
              <p>15</p>
            </div>
            <div>
              <p>Number of attempted questions</p>
              <p>9</p>
            </div>
            <div>
              <p>Number of correct answers</p>
              <p>3</p>
            </div>
            <div>
              <p>Number of wrong answers</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className="resultButtons">
          <button>Play Again</button>
          <button>Back to home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
