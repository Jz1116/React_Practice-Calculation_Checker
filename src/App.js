import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import DisplayScore from './DisplayScore';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
	value1: value1, 
	value2: value2,
    value3: value3,
    proposedAnswer: proposedAnswer,
    numQuestions: numQuestions,
    numCorrect: numCorrect
  }
  
  clickYes = () => {
  	const value1 = this.state.value1;
    const value2 = this.state.value2;
    const value3 = this.state.value3;
    const proposedAnswer = this.state.proposedAnswer;
    
    if (value1 + value2 + value3 === proposedAnswer) {
      this.setState((prevState) => ({
      	numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
      }))
    } else {
      this.setState( prevState => ({
      	numQuestions: prevState.numQuestions + 1
      }))
    }
    this.setUp();
  }	
  
  clickNo = () => {
  	const value1 = this.state.value1;
    const value2 = this.state.value2;
    const value3 = this.state.value3;
    const proposedAnswer = this.state.proposedAnswer;
    
    if (value1 + value2 + value3 !== proposedAnswer) {
      this.setState((prevState) => ({
      	numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
      }))
    } else {
      this.setState( prevState => ({
      	numQuestions: prevState.numQuestions + 1
      }))
    }
    this.setUp();
  }

  setUp = () => {
  	const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  	this.setState({
    	value1: value1,
        value2: value2,
        value3: value3,
     	proposedAnswer: proposedAnswer
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
		  <Calculator onClickYes={this.clickYes} onClickNo={this.clickNo}/>
		  <DisplayScore numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
