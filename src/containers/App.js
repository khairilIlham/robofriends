import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
//import { robots } from './robots'
import Scroll from '../components/Scroll'
import './App.css';
import ErrorBoundry from '../Component/ErrorBoundry';

class App extends Component {
  constructor(){
    super()
    this.state = {
      //robots: robots,
      robots:[],
      searchfield: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => {this.setState({ robots: users})})
}

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robot =>{
      //return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return !robots.length?
       <h1>Loading..</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriend</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
}

export default App;