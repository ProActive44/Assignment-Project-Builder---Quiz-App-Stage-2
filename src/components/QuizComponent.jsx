import React, { Component } from "react";
import "./QuizComponent.css";

class QuizComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleIncrease = () => {
    if (this.state.number >= this.props.data.length - 1) return;
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    if (this.state.number < 1) return;
    this.setState({
      number: this.state.number - 1,
    });
  };

  handleQuit = ()=>{
    confirm("Are you sure you want to quit")
  }

  render() {
    const currQue = this.props.data[this.state.number];
    return (
      <div className="container">
        <div className="heading">
          <h1>Question</h1>
        </div>
        <div className="noOfQuestion">
          <p>{this.state.number + 1} of 15</p>
        </div>
        <div className="titleOfQuestion">
          <p>{currQue.question}</p>
        </div>
        <div className="options">
          <div>{currQue.optionA}</div>
          <div>{currQue.optionB}</div>
          <div>{currQue.optionC}</div>
          <div>{currQue.optionD}</div>
        </div>
        <div className="buttons">
          <button onClick={this.handleDecrease}>Previous</button>
          <button onClick={this.handleIncrease}>Next</button>
          <button onClick={this.handleQuit}>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
