import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_profile'
import axios from "axios"
import "./style/profile.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import FormData from 'form-data'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionUsers from "../../../stores/actions/users"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            old_password : '',
            password : '',
            username : '',
            email : '',
            alamat : '',
            token : '',
        }
    }

    componentDidMount() {
        this.setState({
            name : this.props.users.data.name_user,
            username : this.props.users.data.username,
            email : this.props.users.data.username,
            alamat : this.props.users.data.alamat,
            token : this.props.users.token,
          });
    }

    SubmitHandler = async () => {
        try {
            const token = this.state.token
            const categories = parseInt(this.state.id_category)
            const price = parseInt(this.state.price_product)
            const body = new FormData ();
            body.append('name_product',this.state.name_product);
            body.append('price_product', price);
            body.append('brand_product',this.state.brand_product);
            body.append('store_name',this.state.store_name);
            body.append('id_category', categories);
            body.append('image',this.state.image);
            body.append('description',this.state.description);
            const res = await axios.post(`${process.env.REACT_APP_API}/product/add`, body, {'Content-type':'multipart/form-data',token_auth: token,});
            console.log(this.state)
            alert('berhasil upload')
            console.log(res)
            this.props.history.push("/login-cust") // pindah halam
        } catch (error) {
            console.error(error.message);
        }
    }

    ChangeName = (e) => {
        this.setState({name : e.target.value})
    }

    ChangeOldPass = (e) => {
        this.setState({old_password : e.target.value})
    }

    ChangePass = (e) => {
        this.setState({password : e.target.value})
    }

    ChangeEmail = (e) => {
        this.setState({email : e.target.value})
    }

    ChangeAlamat = (e) => {
        this.setState({alamat : e.target.value})
    }

    render() {

        return (
            <div>
                <Navigasi />
                <div className="profile-page">
                    <div className="container">
                        {/* profile */}
                        <div className="col-12 bg-white shadow-sm py-4">
                            <div className="text-center">
                                <h3 className="text-bold m-0 mt-3">Edit Profile</h3>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Nama Lengkap</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" placeholder="Nama Lengkap" onChange={this.ChangeName}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Email</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" placeholder="Email" onChange={this.ChangeEmail}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Username</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" placeholder={this.state.username} readOnly/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Password Lama</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" onChange={this.ChangeOldPass}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Password Baru</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" onChange={this.ChangePass}/>
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Alamat</h5>
                                <div className="mt-3">
                                    <textarea type="text" className="search-box-p text-reguler p-3 desc-box" onChange={this.ChangeAlamat}></textarea>
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <button className="btn-signup-p mx-auto text-reguler" onClick={this.SubmitHandler} >Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-bg">
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AuthSet: bindActionCreators(ActionUsers.AuthSet, dispatch),
        UserSet: bindActionCreators(ActionUsers.UserSet, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)