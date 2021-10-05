import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_user'
import Cards from '../../../components/card_product/card_user.jsx'
import axios from "axios"
import "./style/index.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "wahyu",
      prods: [],
      value: '',
    }
  }

  componentDidMount() {
    const urlname = this.props.match.url;
    let array = urlname.split("");
    let length = array.length;
    let array1 = array.slice(6, (length));
    let name = ''
    for (let i = 0; i < array1.length; i++) {
      name = name + array1[i];
    }
    if (name === 'asc') {
      this.setState({
        value: 'Ascending (1 - 9)',
      })
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API}/product/sort/price/${name}`
      }).then((res) => {
        this.setState({
          prods: res.data.result,
        })
      })
    } else {
      this.setState({
        value: 'Descending (9 - 1)',
      })
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API}/product/sort/price/${name}`
      }).then((res) => {
        this.setState({
          prods: res.data.result,
        })
      })
    }
    
  }

  render() {

    return (
      <div>
        <Navigasi />
        <main className="result-page">
          <section className="container">
            <div className="my-5">
              <div className="my-3">
                <h3 className="text-bold m-0">Sort Result</h3>
                <small className="text-secondary text-reguler">Sort product by price '{this.state.value}'</small>
              </div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 box">

                {this.state.prods.map((val) => {
                  return (
                    <Cards
                      image_product={val.image_product}
                      name_product={val.name_product}
                      price_product={val.price_product}
                      brand_product={val.brand_product}
                      id_product={val.id_product}
                    />
                  )
                })}

              </div>
            </div>
          </section>
        </main>

      </div>
    )
  }
}

export default App