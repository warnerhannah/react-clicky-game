import React, { Component } from 'react';
import './App.css';
import friends from './friends.json';
import Header from "./components/Header"
import Instructions from "./components/Instructions"
import Friend from "./components/Friend"
import "./index.css"

class App extends Component {
  state = {
    friends: friends
  }

  clickFriend = (id) => {

  }

  render() {
    return (
      <div>
        <Header />
        <Instructions />
        <div className="displayFriends">
          {friends.map(fren => (
            <Friend
              id={fren.id}
              name={fren.name}
              url={fren.url}
              onClick={() => this.clickFriend}
            >
            </Friend>
          ))}
        </div>
      </div>
    )
  }

};
export default App;