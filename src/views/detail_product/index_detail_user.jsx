import React, { Component } from 'react'
import Navigasi from '../../components/navbar/navbar_user'
import Detail from '../../components/detail_page/detail_user'
import axios from "axios"
import "../detail_product/index_detail.css"
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
            url: `http://localhost:9000/product${id_product}`
        }).then((res) => {
            console.log(res)
            this.setState({
                prods: res.data.result,
            })
            
        })
    }

    DeleteHandler = async () => {
        try {
            const id_product = this.props.match.url;
            const res = await axios.delete(`http://localhost:9000/product/del${id_product}`);
            console.log(res)
        } catch (error) {
            console.error(error.message);
        }
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
                    handDel={() => this.DeleteHandler}
                    />
                )
              })}
            </div>

        )
    }
}

export default App