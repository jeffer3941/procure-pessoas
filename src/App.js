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
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({person: users}))
}

  render() {

    const {person , search} = this.state;
    const filter = person.filter(person => 
      person.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="App">
     
        <SearchBox 
          placeholder = "type to find"  
          handleChange ={e => this.setState({search : e.target.value})}
        /> 
        <CardList person = {filter} />    
      </div>
    );
  }
}

export default App;
