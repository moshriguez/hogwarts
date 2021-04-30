import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigIndex from './PigIndex'
import hogs from "../porkers_data";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super()
    this.state = {
        hogs: hogs,
        filter: 'all'
    }
}

  showGreased = (e.target.value) => {
    this.setState({
      filter: 
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
        <PigIndex hogs={this.state.hogs}/>

      </div>
    );
  }
}

export default App;
