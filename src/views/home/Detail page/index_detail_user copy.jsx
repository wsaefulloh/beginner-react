import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_user'
import Detail from '../../../components/detail_page/detail_user'
import Cards from '../../../components/card_product/card_user copy'
import axios from "axios"
import "./style/index_detail.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "wahyu",
            prods: [],
            other:[],
        }
    }

    componentDidMount() {
        const id_search = this.props.match.url;
    let array = id_search.split("");
    let length = array.length;
    let array1 = array.slice(10, (length));
    let element = ''
    for (let i = 0; i < array1.length; i++) {
      element = element + array1[i];
    }
    
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product/search?name_product=${element}`
    }).then((res) => {
        this.setState({
            prods: res.data.result,
        })
        const categori = this.state.prods[0].category;
        // console.log(this.state.prods)
        // console.log(element)
        this.Getproduct(categori)
    })
        
    }

    

    

    Getproduct(val) {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/product/sort/category/${val}`
        }).then((res) => {
            console.log(res)
            this.setState({
                other: res.data.result,
            })
            console.log(this.state.other)
        })
    }

    render() {
        return (
            <div className="margin-bottom">
                <Navigasi />
                {this.state.prods.map((val) => {
                    return (
                        <Detail
                            image_product={val.image_product}
                            name_product={val.name_product}
                            price_product={val.price_product}
                            brand_product={val.brand_product}
                            description={val.description}
                            category={val.category}
                            id_product={val.id_product}
                        />
                    )
                })}

                <div className="mb-6">
                    <div className="container">
                        <div>
                            <section className="align-items-center">
                                <h5 className="text-bold m-0 mb-3">Related Product</h5>
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 box">
                                    {this.state.other.map((val) => {
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
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App