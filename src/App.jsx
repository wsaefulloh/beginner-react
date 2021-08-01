import React, { Component } from 'react'
import Navigasi from './components/navbar/navbar_public'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : "wahyu"
    }
  }

  render() {
    return (
      <Navigasi />
    )
  }
}

export default App
