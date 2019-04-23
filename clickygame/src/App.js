import React, {Component} from 'react';
import './App.css';
import friends from './friends.json';
import Header from "./components/Header"
import "./index.css"

class App extends Component {
state = {
  friends: friends
}

render () {
  return (
    <div>
      <Header />
      {/* hellok */}
    </div>
  )
}

};
export default App;