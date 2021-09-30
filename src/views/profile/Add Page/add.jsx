import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_profile'
import axios from "axios"
import "./style/add.scoped.css"
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
                                <h3 className="text-bold m-0 mt-3">Johanes Mikael</h3>
                                <Link>
                                    <small className="desc-product text-reguler m-0 mt-1">Ubah profile</small>
                                </Link>
                                <div className="mt-3">
                                    <Link>
                                        <button className="btn-signup-p mx-1 text-reguler">Store Profile</button>
                                    </Link>
                                    <Link to='/profile/myproduct'>
                                        <button className="btn-signup-p mx-1 text-reguler">My Product</button>
                                    </Link>
                                    <Link to='/profile/add'>
                                        <button className="btn-login-p mx-1 text-reguler">Selling Product</button>
                                    </Link>
                                    <Link>
                                        <button className="btn-signup-p mx-1 text-reguler">Log Out</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Category</h5>
                                <small className="desc-product text-reguler m-0 mt-2">Type category</small>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3" placeholder="1-Shirt, 2-Short, 3-Jacket, 4-Pants, 5-Shoes" onChange={this.ChangeCategory}/>
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Inventory</h5>
                                <small className="desc-product text-reguler m-0 mt-2">Name product</small>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3" onChange={this.ChangeName} />
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Details</h5>
                                <small className="desc-product text-reguler m-0 mt-2">Detail product</small>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3" placeholder="Price" onChange={this.ChangePrice} />
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3" placeholder="Brand" onChange={this.ChangeBrand} />
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3" placeholder="Store" onChange={this.ChangeStore} />
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Image</h5>
                                <small className="desc-product text-reguler m-0 mt-2">Image product</small>
                                <div className="mt-3">
                                    <input type="file" className="text-reguler" placeholder="Image" onChange={this.ChangeImage} />
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <h5 className="text-bold m-0">Description</h5>
                                <small className="desc-product text-reguler m-0 mt-2">Description product</small>
                                <div className="mt-3">
                                    <input type="text" className="search-box-p text-reguler p-3 desc-box" onChange={this.ChangeDescription} />
                                </div>
                            </div>
                        </div>
                        {/* inventory */}
                        <div className="col-12 bg-white shadow-sm py-4 mt-3">
                            <div className="px-4">
                                <button className="btn-signup-p mx-auto text-reguler" onClick={this.SubmitHandler} >Upload Product</button>
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