import React, { useState } from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.scoped.css"
import { Link } from "react-router-dom"
import logo from "../../../components/asset/logo.png"

const App = () => {
    const [name_users, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role] = useState('admin')

    const Register = async () => {
        const body = new URLSearchParams();
        body.append("name_users", name_users);
        body.append('username', username);
        body.append('password', password);
        body.append('role', role);
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/users/add`,
            data: body,
            headers: { 'Content-type': 'application/x-www-form-urlencoded', }
        }).then((res) => {
            alert('berhasil mendaftar')
            console.log(res)
            this.props.history.push('/login-seller')
        }).catch((err) => {
            alert('username sudah terdaftar')
        })
    }

    const inputName = (e) => {
        setName(e.target.value)
    }

    const inputUsername = (e) => {
        setUsername(e.target.value)
    }

    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

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
                            <h6 className="my-0 mx-auto mt-4 text-bold">Please signup with your account</h6>
                        </div>
                        <div className="d-flex col-9 mx-auto justify-content-center">
                            <Link className="col-6 btn-cust-off" to="/register-cust">
                                <p className="text-reguler">Customers</p>
                            </Link>
                            <Link className="col-6 btn-seller-on" to="/register-seller">
                                <p className="text-reguler">Seller</p>
                            </Link>
                        </div>
                        <div className="row mt-4 g-3">
                            <div className="col-12 text-center">
                                <input type="text" onChange={inputName} className="col-10 form-input text-reguler" placeholder="Your name" />
                            </div>
                            <div className="col-12 text-center">
                                <input type="text" onChange={inputUsername} className="col-10 form-input text-reguler" placeholder="Your username" />
                            </div>
                            <div className="col-12 text-center">
                                <input type="text" onChange={inputPassword} className="col-10 form-input text-reguler" placeholder="Your password" />
                            </div>
                            <div className="col-12 text-center mx-auto align-items-center d-flex">
                                <button onClick={Register} className="col-10 text-submit text-reguler mx-auto">PRIMARY</button>
                            </div>
                            <div className="col-12 text-center">
                                <p className="col-10 mx-auto text-reguler">Already have a Blanja account? <Link className="text-reguler text-forgot" to="/login-cust">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )


}

export default App