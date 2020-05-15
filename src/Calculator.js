import React, { Component } from 'react';


class Calculator extends Component {
  
  render() {
    return (
      <div>
    	<button onClick={() => this.props.onClickYes()}>True</button>
        <button onClick={() => this.props.onClickNo()}>False</button>
      </div>
    );
  }
}

export default Calculator;