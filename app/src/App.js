import React, { Component } from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends Component {
  state = {
    myGitData: [],
    followerData: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/raudelf')
      .then(res => res.json())
      .then(myData => {
        console.log('RF: fetch > My Data: ', myData)
        this.setState({...this.state, myGitData: myData})
      })
      .catch(err => console.log('RF: Error on Data Fetch: ', err));

    fetch('https://api.github.com/users/raudelf/followers')
      .then(res => res.json())
      .then(followerData => {
        console.log('RF: fetch > Follower Data: ', followerData)
        this.setState({...this.state, followerData: followerData})
      })
  }

  render () {
    return (
      <div className='App'>
        <header className='header'>
          <h1>Github User Cards</h1>
        </header>
        <UserCard user={this.state.myGitData}/>
        {this.state.followerData.map((gitUser, index) => {
          return (
            <UserCard user={gitUser} key={index}/>
          )
        })}
      </div>
    );
  }
}

export default App;
