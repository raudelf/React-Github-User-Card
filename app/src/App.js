import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    myGitData: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/raudelf')
      .then(res => res.json())
      .then(data => {
        console.log('RF: fetch > data: ', data)
        this.setState({...this.state, myGitData: data})
      })
      .catch(err => console.log('RF: Error on Data Fetch: ', err));
  }

  render () {
    return (
      <div className='App'>
        <header className='header'>
          <h1>Github User Cards</h1>
        </header>
      </div>
    );
  }
}

export default App;
