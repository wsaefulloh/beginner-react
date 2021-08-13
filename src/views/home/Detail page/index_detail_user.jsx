import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_user'
import Detail from '../../../components/detail_page/detail_user'
import axios from "axios"
import "./style/index_detail.scoped.css"
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
        const id_product = this.props.match.url;
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/product${id_product}`
        }).then((res) => {
            console.log(res)
            this.setState({
                prods: res.data.result,
            })
        })
    }

    render() {
        return (
            <div>
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

            </div>

        )
    }
}

export default App