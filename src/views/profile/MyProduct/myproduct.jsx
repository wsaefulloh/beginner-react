import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_profile'
import axios from "axios"
import "./style/profile.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import { Button, Modal } from 'react-bootstrap';
import FormData from 'form-data'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prods: [],
            show: false,
            id_product: '',
            name_product: '',
            price_product: '',
            brand_product: '',
            store_name: '',
            id_category: '',
            image: '',
            description: '',
        }
    }

    deleteProduct(id) {
        axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API}/product/del/${id}`,
        }).then((res) => {
            alert('delete product success')
            this.Getproduct()
        })
    }

    SubmitHandler = async () => {
        try {
            const categories = parseInt(this.state.id_category)
            const price = parseInt(this.state.price_product)
            const body = new FormData();
            body.append('id', this.state.id_product);
            body.append('name_product', this.state.name_product);
            body.append('price_product', price);
            body.append('brand_product', this.state.brand_product);
            body.append('store_name', this.state.store_name);
            body.append('id_category', categories);
            body.append('image', this.state.image);
            body.append('description', this.state.description);
            const res = await axios.put(`${process.env.REACT_APP_API}/product/update`, body, { 'Content-type': 'multipart/form-data', });
            console.log(this.state)
            this.setState({ show: false })
            this.Getproduct()
            console.log(res)
        } catch (error) {
            console.error(error);
            console.log(this.state)
        }
    }

    ChangeName = (e) => {
        this.setState({ name_product: e.target.value })
    }

    ChangePrice = (e) => {
        this.setState({ price_product: e.target.value })
    }

    ChangeBrand = (e) => {
        this.setState({ brand_product: e.target.value })
    }

    ChangeStore = (e) => {
        this.setState({ store_name: e.target.value })
    }

    ChangeCategory = (e) => {
        this.setState({ id_category: e.target.value })
    }

    ChangeImage = (e) => {
        const file = e.target.files[0];
        if (file.type === "image/jpg" || file.type === "image/png" || file.type === "image/jpeg")
            this.setState({ image: file })
    }

    ChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    Getproduct() {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/product/all`,
        }).then((res) => {
            this.setState({
                prods: res.data.result,
            })
            console.log(this.state.prods)
        })
    }

    handleClose() {
        this.setState({ show: false })
    }

    handleShow(data) {
        this.setState({ show: true })
        this.setState({ name_product: data.name_product })
        this.setState({ id_product: data.id_product })
        this.setState({ brand_product: data.brand_product })
        this.setState({ store_name: data.store_name })
        this.setState({ price_product: data.price_product })
        this.setState({ id_category: data.id_category })
        this.setState({ description: data.description })
    }

    componentDidMount() {
        this.Getproduct()
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
                                        <button className="btn-login-p mx-1 text-reguler">My Product</button>
                                    </Link>
                                    <Link to="/profile/add">
                                        <button className="btn-signup-p mx-1 text-reguler">Selling Product</button>
                                    </Link>
                                    <Link>
                                        <button className="btn-signup-p mx-1 text-reguler">Log Out</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* laman product */}
                        <section className="col-12 align-items-center mt-4">
                            {/* product add bag */}
                            {this.state.prods.map((val) => {
                                const data = {
                                    id_product: val.id_product,
                                    name_product: val.name_product,
                                    price_product: val.price_product,
                                    brand_product: val.brand_product,
                                    store_name: val.store_product,
                                    id_category: val.id_category,
                                    description: val.description,
                                }
                                return (

                                    <div className="row align-items-center box-check-items py-3 align-content-between">
                                        <div className="col d-flex align-items-center">
                                            <img src={val.image_product} className='image-size' alt="" />
                                            <div className="mx-4">
                                                <p className="text-reguler">{val.name_product}</p>
                                                <p className="desc-product text-reguler">{val.brand_product}</p>
                                            </div>
                                        </div>
                                        <div className="col-2 pe-4 ps-0 text-center">
                                            <small className="text-bold m-0 p-0">Rp. <span>{val.price_product}</span></small>
                                        </div>
                                        <div className="col-2 pe-4 ps-0 text-center">
                                            <div className="text-bold m-0 p-0 click" onClick={() => this.handleShow(data)}>Update</div>
                                            <div onClick={() => this.deleteProduct(val.id_product)} className="text-bold click m-0 p-0 text-update mt-2">Delete</div>
                                        </div>
                                        <div className="col-3 pe-4 ps-0 text-end">
                                            <small className="text-bold m-0 p-0 text-update">Last update : <span>{val.updatedAt}</span></small>
                                        </div>

                                        <Modal show={this.state.show} onHide={() => this.handleClose()}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Update Product</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className="mt-0">
                                                    <p className="my-2 text-bold">Category</p>
                                                    <input type="text" className="search-box-p text-reguler p-3" value={this.state.id_category} onChange={this.ChangeCategory} />
                                                </div>
                                                <div className="mt-1">
                                                    <p className="my-2 text-bold">Name Product</p>
                                                    <input type="text" className="search-box-p text-reguler p-3" value={this.state.name_product} onChange={this.ChangeName} />
                                                </div>
                                                <div className="mt-1">
                                                    <p className="my-2 text-bold">Brand</p>
                                                    <input type="text" className="search-box-p text-reguler p-3" value={this.state.brand_product} onChange={this.ChangeBrand} />
                                                </div>
                                                <div className="mt-1">
                                                    <p className="my-2 text-bold">Price</p>
                                                    <input type="text" className="search-box-p text-reguler p-3" value={this.state.price_product} onChange={this.ChangePrice} />
                                                </div>
                                                <div className="mt-1">
                                                    <p className="my-2 text-bold">Store</p>
                                                    <input type="text" className="search-box-p text-reguler p-3" value={this.state.store_name} onChange={this.ChangeStore} />
                                                </div>
                                                <div className="mt-1">
                                                    <p className="my-2 text-bold">Image</p>
                                                    <input type="file" className="text-reguler" placeholder="Image" onChange={this.ChangeImage} />
                                                </div>
                                                <div className="mt-1 mb-2">
                                                    <p className="my-2 text-bold">Description</p>
                                                    <input type="text" className="search-box-p text-reguler p-3" value={this.state.description} onChange={this.ChangeDescription} />
                                                </div>
                                                <Button variant="secondary" onClick={() => this.handleClose()}>
                                                    Cancel update
                                                </Button>
                                                <Button className="ms-3" variant="primary" onClick={() => this.SubmitHandler()}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Body>
                                        </Modal>

                                    </div>
                                )
                            })}
                        </section>
                        </div>
                        <div className="new-bg">
                        </div>
                    </div>
            </div>
        )
    }
}

export default App