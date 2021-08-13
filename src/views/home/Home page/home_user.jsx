import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_user'
import Carousel from '../../../components/carousel/carousel.jsx'
import Category from '../../../components/category/category.jsx'
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
    }
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product/all`,
    }).then((res) => {
      this.setState({
        prods: res.data.result,
      })
    })
  }

  render() {
    
    return (
      <div>
        <Navigasi />
        <main>
        <Carousel />
        <Category />

        <section className="container">
          <div className="my-5">
            <div className="my-3">
              <h3 className="text-bold m-0">New</h3>
              <small className="text-secondary text-reguler">You've never seen it before!</small>
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

        <section className="container">
          <div className="my-5">
            <div className="my-3">
              <h3 className="text-bold m-0">Popular</h3>
              <small className="text-secondary text-reguler">Find clothes that are trending recently</small>
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