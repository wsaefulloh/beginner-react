import React, { Component } from 'react'
import Navigasi from '../../components/navbar/navbar_user'
import "../bag_page/bag.css"
import "bootstrap/dist/css/bootstrap.min.css";
import contoh from "../../components/asset/men formal suit.png"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "wahyu",
            prods: [],
        }
    }

    render() {
        return (
            <div>
                <Navigasi />
                < main >
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
                                <div className="row align-items-center box-check">
                                    <div className="col-1 text-center d-flex align-items-center">
                                        <input className="w-100 align-items-center" type="checkbox" defaultChecked />
                                    </div>
                                    <div className="col text-start text-reguler">
                                        <p>Select all items <span className="text-span">(2 items selected)</span></p>
                                    </div>
                                    <div className="col-2 text-end pe-4 ps-0 text-reguler text-danger">
                                        <p>Delete</p>
                                    </div>
                                </div>
                                {/* product add bag */}
                                <div className="row align-items-center box-check-items py-3 align-content-between">
                                    <div className="col-1 text-center d-flex align-items-center">
                                        <input className="w-100 align-items-center" type="checkbox" defaultChecked />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <img src={contoh} alt=""/>
                                        <div className="mx-4">
                                            <p className="text-reguler">Men's formal suit</p>
                                            <p className="desc-product text-reguler">Zalora Cloth</p>
                                        </div>
                                    </div>
                                    <div className="icon-count">
                                        <div className="d-flex icon-minus align-items-center align-content-center text-center">
                                            <p className="align-items-center align-content-center text-center icon">-</p>
                                        </div>
                                    </div>
                                    <div className="icon-count align-items-center align-content-center text-center">
                                        <p>
                                            1
                                        </p>
                                    </div>
                                    <div className="icon-count align-items-center align-content-center text-center">
                                        <div className="d-flex icon-plus align-items-center align-content-center text-center">
                                            <p className="align-items-center align-content-center text-center icon">+</p>
                                        </div>
                                    </div>
                                    <div className="col-3 pe-4 ps-0 text-end">
                                        <small className="text-bold m-0 p-0">Rp. 149900</small>
                                    </div>
                                </div>
                                {/* product add bag */}
                                <div className="row align-items-center box-check-items py-3">
                                    <div className="col-1 text-center d-flex align-items-center">
                                        <input className="w-100 align-items-center" type="checkbox" defaultChecked />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <img src={contoh} alt=""/>
                                        <div className="mx-4">
                                            <p className="text-reguler">Men's jacket jeans</p>
                                            <p className="desc-product">Zalora Cloth</p>
                                        </div>
                                    </div>
                                    <div className="icon-count">
                                        <div className="d-flex icon-minus align-items-center align-content-center text-center">
                                            <p className="align-items-center align-content-center text-center icon">-</p>
                                        </div>
                                    </div>
                                    <div className="icon-count align-items-center align-content-center text-center">
                                        <p>
                                            1
                                        </p>
                                    </div>
                                    <div className="icon-count align-items-center align-content-center text-center">
                                        <div className="d-flex icon-plus align-items-center align-content-center text-center">
                                            <p className="align-items-center align-content-center text-center icon">+</p>
                                        </div>
                                    </div>
                                    <div className="col-3 pe-4 ps-0 text-end ">
                                        <small className="text-bold m-0 p-0">Rp. 149900</small>
                                    </div>
                                </div>
                            </section>
                            {/* summary */}
                            <section className="col-4">
                                <div className="col box-check-2 h-50 p-3">
                                    <p className="text-bold mb-3">Shopping summary</p>
                                    <div className="row align-items-center mb-3">
                                        <div className="col">
                                            <p className="text-reguler desc-summary">
                                                Total price
                                            </p>
                                        </div>
                                        <div className="col text-end pe-3 ps-0">
                                            <small className="text-bold">
                                                Rp. 299800
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