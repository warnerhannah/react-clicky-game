import React, {Component} from 'react';
import './App.css';
import friends from './friends.json';
import Header from "./components/Header"
import Instructions from "./components/Instructions"
import "./index.css"

class App extends Component {
state = {
  friends: friends
}

render () {
  return (
    <div>
      <Header />
      <Instructions />
    </div>
  )
}

};
export default App;