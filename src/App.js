import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person:[ ]
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({person: users}))
}

  render() {
    return (
      <div className="App">
        <CardList person = {this.state.person} />    
      </div>
    );
  }
}

export default App;
