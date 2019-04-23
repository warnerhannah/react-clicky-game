import React, { Component } from 'react';
import './App.css';
import friends from './friends.json';
import Header from "./components/Header"
import Instructions from "./components/Instructions"
import Friend from "./components/Friend"
import "./index.css"

class App extends Component {
  state = {
    friends: friends,
    score: 0,
    topScore: 0,
    guess: "",
    clickedId: []
  }

  createArray() {
    let newArray = this.state.friends.sort(function () {
      return .5 - Math.random()
    })
    this.setState({ friends: newArray })
    console.log(this.state.clickedId)
  }

  endGame() {
    this.createArray();
    this.setState({
      score: 0,
      clickedId: []
    })
  }


  clickFriend(id) {
    console.log(id)
    const isit = this.state.clickedId.some(click => {
      return (click === id)
    });

    if (isit) {
      console.log("already clicked")
      this.setState({ guess: "incorrectly!" })
      this.endGame();
    }
    else {
      console.log("newclick")
      const newScore = this.state.score + 1
      console.log(newScore)
      this.setState({
        clickedId: [...this.state.clickedId, id],
        score: newScore,
        guess: "correctly!",
      })
      if (newScore > this.state.topScore) {
        this.setState({
          topScore: newScore,
        })
      }
    }
    this.createArray();
  }

render() {
  return (
    <div>
      <Header
        score={this.state.score}
        topScore={this.state.topScore}
        guess={this.state.guess}
      />
      <Instructions />
      <div className="displayFriends">
        {this.state.friends.map(fren => (
          <div onClick={() => this.clickFriend(fren.id)}>
            <Friend
              id={fren.id}
              name={fren.name}
              url={fren.url}
            >
            </Friend>
          </div>
        ))}
      </div>
    </div>
  )
}

};
export default App;