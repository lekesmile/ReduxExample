import React, { Component } from 'react'
import Counter from './containers/Counter'
import Anotherway from './containers/Anotherway'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Anotherway />
      </div>
    )
  }
}


export default App