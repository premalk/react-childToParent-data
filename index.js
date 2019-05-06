import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  handle = (values) => {
    this.setState({name:values});
  }
  render() {
    return (
      <div>
        <Hello name={this.handle} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
