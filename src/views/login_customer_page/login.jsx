import React, { Component } from 'react'
// import axios from "axios"
import "../detail_product/index_detail.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../login_customer_page/login.css"
import { Link } from "react-router-dom"
import logo from "../../components/asset/logo.png"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
        }
    }

    render() {
        return (
            <main className="mt-5">
                <section>
                    <div className="container">
                        <div className="col-12 col-md-6 col-xl-4 mx-auto">
                            <div className="d-block d-md-none my-5">
                                <h1 className="text-center my-0 text-bold">Login Blanja</h1>
                            </div>
                            <div className="d-none d-md-block my-5 text-center">
                                <Link to="/">
                                    <img className="mx-auto" src={logo} alt="" />
                                </Link>
                                <h6 className="my-0 mx-auto mt-4 text-bold">Please login with your account</h6>
                            </div>
                            <div className="d-flex col-9 mx-auto justify-content-center">
                                <Link className="col-6 btn-cust-on" to = "/login-cust">
                                    <p className="text-reguler">Customers</p>
                                </Link>
                                <Link className="col-6 btn-seller-off" to="/login-seller">
                                    <p className="text-reguler">Seller</p>
                                </Link>
                            </div>
                            <form action="../index.html" className="row mt-4 g-3 needs-validation" validate>
                                <div className="col-12 text-center">
                                    <input className="col-10 form-input text-reguler" type="text" id="email" placeholder="Email" autoComplete="off" required />
                                </div>
                                <div className="col-12 text-center">
                                    <input className="col-10 form-input text-reguler" type="password" id="password" placeholder="Password" autoComplete="off" required />
                                </div>
                                <div className="col-12 text-end">
                                    <Link to="#" className="col-10 d-block mx-auto text-reguler text-forgot">Forgot password?</Link>
                                </div>
                                <div className="col-12 text-center mx-auto align-items-center d-flex">
                                    <button className="col-10 text-submit text-reguler mx-auto" type="submit">PRIMARY</button>
                                </div>
                                <div className="col-12 text-center">
                                    <p className="col-10 mx-auto text-reguler">Don't have a Blanja account? <Link className="text-reguler text-forgot" to="#">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App