import React, { Component } from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.scoped.css"
import { Link } from "react-router-dom"
import logo from "../../../components/asset/logo.png"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null,
        }
    }

    SubmitHandler = async () => {
        try {
            const body = new URLSearchParams();
            body.set('username', this.state.username);
            body.set('password', this.state.password);
            const res = await axios.post(`${process.env.REACT_APP_API}/login`, body, { 'Content-type': 'application/x-www-form-urlencoded', });
            console.log(res)
        } catch (error) {
            console.error(error);
            console.log(this.state)
        }

        // const body = new URLSearchParams();
        
        // console.log(this.state)
        // axios({
        //     method: "GET",
        //     url: "http://localhost:9000/login",
        //     data: body,
        //     headers: { 'Content-type': 'application/x-www-form-urlencoded', }
        // }).then((res) => {
        //     alert('berhasil login')
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        //     console.log(body)
        // })
    }

    ChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    ChangePassword = (e) => {
        this.setState({ password: e.target.value })
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
                            <div className="row mt-4 g-3">
                                <div className="col-12 text-center">
                                    <input onChange={this.ChangeUsername} className="col-10 form-input text-reguler" type="text" placeholder="Username"/>
                                </div>
                                <div className="col-12 text-center">
                                    <input onChange={this.ChangePassword} className="col-10 form-input text-reguler" type="password" placeholder="Password" />
                                </div>
                                {/* <div className="col-12 text-end">
                                    <Link to="#" className="col-10 d-block mx-auto text-reguler text-forgot">Forgot password?</Link>
                                </div> */}
                                <div className="col-12 text-center mx-auto align-items-center d-flex">
                                    <button onClick={this.SubmitHandler} className="col-10 text-submit text-reguler mx-auto">PRIMARY</button>
                                </div>
                                <div className="col-12 text-center">
                                    <p className="col-10 mx-auto text-reguler">Don't have a Blanja account? <Link className="text-reguler text-forgot" to="/register-cust">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App