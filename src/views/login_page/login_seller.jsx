import React, { Component } from 'react'
import axios from "axios"
import "../login_page/login.css"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "wahyu",
      prods: [],
    }
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:9000/product/all",
    }).then((res) => {
      this.setState({
        prods: res.data.result,
      })
    })
  }

  render() {
    
    return (
      <div>

      </div>
    )
  }
}

export default App