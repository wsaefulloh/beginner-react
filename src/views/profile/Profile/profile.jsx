import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_profile'
import axios from "axios"
import "./style/profile.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import FormData from 'form-data'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name_product:'',
            price_product:'',
            brand_product:'',
            store_name:'',
            id_category:'',
            image:'',
            description:'',
        }
    }

    SubmitHandler = async () => {
        try {
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
            const res = await axios.post(`${process.env.REACT_APP_API}/product/add`, body, {'Content-type':'multipart/form-data',});
            console.log(this.state)
            alert('berhasil upload')
            console.log(res)
        } catch (error) {
            console.error(error.message);
        }
    }

    ChangeName = (e) => {
        this.setState({name_product : e.target.value})
    }

    ChangePrice = (e) => {
        this.setState({price_product : e.target.value})
    }

    ChangeBrand = (e) => {
        this.setState({brand_product : e.target.value})
    }

    ChangeStore = (e) => {
        this.setState({store_name : e.target.value})
    }

    ChangeCategory = (e) => {
        this.setState({id_category : e.target.value})
    }

    ChangeImage = (e) => {
        const file = e.target.files[0];
        if (file.type === "image/jpg" || file.type === "image/png" || file.type === "image/jpeg")
        this.setState({image : file})
    }

    ChangeDescription = (e) => {
        this.setState({description : e.target.value})
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
                                    <input type="text" className="product-box-p text-reguler p-3" placeholder="Nama Lengkap" onChange={this.ChangeCategory}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Email</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" placeholder="Email" onChange={this.ChangeCategory}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Username</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" placeholder="Username" onChange={this.ChangeCategory}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Password Lama</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" onChange={this.ChangeCategory}/>
                                </div>
                            </div>
                            <div className="mt-3 px-4 d-flex align-content-center align-items-center">
                                <h6 className="col-3 text-bold m-0">Password Baru</h6>
                                <div className="m-0 col-9">
                                    <input type="text" className="product-box-p text-reguler p-3" onChange={this.ChangeCategory}/>
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Alamat</h5>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3 desc-box" onChange={this.ChangeDescription} />
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

export default App