import React, { Component } from 'react'
import Navigasi from '../../components/navbar/navbar_user'
// import BagProduct from '../../components/bag_product/bag_product'
import "./style/bag.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "wahyu",
            prods: [],
            hargaTotal: '',
        }
    }

    Getbag() {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/bag/all`,
        }).then((res) => {
            let harga = 0
            for (let i = 0; i < res.data.result.length; i++) {
                harga = harga + res.data.result[i].totalPrice;
            }
            this.setState({
                prods: res.data.result,
                hargaTotal: parseInt(harga)
            })
            console.log(res)
            console.log(this.state)
        })
    }

    componentDidMount() {
        this.Getbag()
    }

    updateBag(id,count) {
        const body = new URLSearchParams();
        body.append("id", id);
        body.append("count", count );
        axios({
            method: "PUT",
            url: "http://localhost:9000/bag/update",
            data: body,
            headers: { 'Content-type': 'application/x-www-form-urlencoded', }
        }).then((res) => {
            this.Getbag()
        })
    }

    deleteBag(id) {
        axios({
            method: "DELETE",
            url: `http://localhost:9000/bag/del/${id}`,
        }).then((res) => {
            this.Getbag()
        })
    }

    btnPlus(id,count) {
        let newCount = count + 1
        this.updateBag(id,newCount)
    }

    btnMinus(id,count) {
        if (count <= 1) {
            this.deleteBag(id)
        } else {
            let newCount = count - 1
            this.updateBag(id,newCount)
        }
    }

    render() {
        return (
            <div>
                <Navigasi />
                < main className="main-bag" >
                    {/* title */}
                    <section section className="container" >
                        <div className="my-3">
                            <div className="my-3">
                                <h3 className="text-bold m-0">My Bags</h3>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* bag product */}
                            <section className="col-8 align-items-center">
                                {/* product add bag */}
                                {this.state.prods.map((val) => {
                                    return (

                                        <div className="row align-items-center box-check-items py-3 align-content-between">
                                            <div className="col d-flex align-items-center">
                                                <img src={val.image_product} className='image-size' alt="" />
                                                <div className="mx-4">
                                                    <p className="text-reguler">{val.name_product}</p>
                                                    <p className="desc-product text-reguler">{val.brand_product}</p>
                                                </div>
                                            </div>
                                            <div className="icon-count" onClick={() => this.btnMinus(val.id_bag,val.count)}>
                                                <div className="d-flex icon-minus align-items-center align-content-center text-center">
                                                    <p className="align-items-center align-content-center text-center icon">-</p>
                                                </div>
                                            </div>
                                            <div className="icon-count align-items-center align-content-center text-center">
                                                <p>
                                                    {val.count}
                                                </p>
                                            </div>
                                            <div className="icon-count align-items-center align-content-center text-center" onClick={() => this.btnPlus(val.id_bag,val.count)}>
                                                <div className="d-flex icon-plus align-items-center align-content-center text-center"  >
                                                    <p className="align-items-center align-content-center text-center icon">+</p>
                                                </div>
                                            </div>
                                            <div className="col-3 pe-4 ps-0 text-end">
                                                <small className="text-bold m-0 p-0">Rp. <span>{val.totalPrice}</span></small>
                                            </div>
                                        </div>

                                        // <BagProduct
                                        //     image_product={val.image_product}
                                        //     name_product={val.name_product}
                                        //     count={val.count}
                                        //     totalPrice={val.totalPrice}
                                        //     brand_product={val.brand_product}
                                        //     id_product={val.id_product}
                                        // />
                                    )
                                })}
                            </section>
                            {/* summary */}
                            <section className="col-4">
                                <div className="col box-check-2 p-3">
                                    <p className="text-bold mb-3">Shopping summary</p>
                                    <div className="row align-items-center mb-3">
                                        <div className="col">
                                            <p className="text-reguler desc-summary">
                                                Total price
                                            </p>
                                        </div>
                                        <div className="col text-end pe-3 ps-0">
                                            <small className="text-bold">
                                                Rp. <span>{this.state.hargaTotal}</span>
                                            </small>
                                        </div>
                                    </div>
                                    <button className="w-100 btn-buy text-bold">Buy</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </main >
            </div>
        )
    }
}

export default App