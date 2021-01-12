import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person:[ ],
      search: ' ' 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({person: users}))
  }

  handleChange = (e) => {
    this.setState({search : e.target.value})
  }

  render() {

    const {person , search} = this.state;
    const filter = person.filter(person => 
      person.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="App">
        <h1 id="title">Search People</h1>
        <SearchBox 
          placeholder = "type to find"  
          handleChange ={this.handleChange}
        /> 
        <CardList person = {filter} />    
      </div>
    );
  }
}

export default App;
