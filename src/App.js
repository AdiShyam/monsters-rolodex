import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      title: 'List of Monstors'
    };
  }

  async componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const mosterUser = await response.json()
    // debugger
    // this.setState({ monster: mosterUser })
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value });
  }

  // onSearchChange = event => {
  //   this.setState({ searchField: event.target.value, title: event.target.value });
  //   console.log("in search change function");
  // }

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonstor = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log("The searched monstor list are", filteredMonstor);
    console.log("dfsdfd", title)
    return (
      <div className="App">
        <h1> {title} </h1>
        <SearchBox
          // onSearchChange = {this.onSearchChange}
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonstor} ></CardList>
      </div>
    );
  }
}

export default App;
