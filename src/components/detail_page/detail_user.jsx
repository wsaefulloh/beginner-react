import "../detail_page/detail.css"
import React from "react"
// import { Link } from "react-router-dom"
import star from "../asset/star_active.png"
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios"



function Cards(props) {
    return (
        <main className="container">
            <section className="container">
                <div className="my-3">
                    <span className="text-span">Home &gt; Category &gt; {props.category}</span>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-between">
                    <section className="col align-items-center text-center">
                        <img className="image-prods" src={props.image_product} alt="" />
                    </section>
                    <section className="col">
                        <div>
                            <h4 className="text-bold m-0 p-0 mb-2">{props.name_product}</h4>
                            <p className="desc-product text-reguler mb-2">{props.brand_product}</p>
                            <div className="d-flex mb-2">
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <p className="text-reguler mx-lg-1 text-secondary">(5/5)</p>
                            </div>
                            <p className="desc-product text-reguler mb-2">Price</p>
                            <h4 className="text-bold m-0 p-0 mb-4">Rp. <span>{props.price_product}</span></h4>
                            <div className="d-flex justify-content-start">
                                <button className="btn-signup-d p-0 m-0 mx-2 text-reguler" data-bs-toggle="modal" data-bs-target="#exampleModal" >Update</button>
                                <div>
                                    <button className="btn-signup-d p-0 m-0 mx-2 text-reguler"  >Delete</button>
                                </div>
                                <div>
                                    <button className="btn-signup-d p-0 m-0 mx-2 text-reguler">Add Bag</button>
                                </div>
                                <div>
                                    <button className="btn-login-d p-0 m-0 mx-2 text-reguler">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-4">
                    <h5 className="text-bold m-0 mb-3">Description</h5>
                    <p className="justify text-reguler detail-product">{props.description}</p>
                </div>
            </div>
        </main>

    )
}

// onClick={DeleteHandler(props.id_product)}

// async function DeleteHandler(id) {
//     try {
//         const id_produc = id;
//         const res = await axios.delete(`http://localhost:9000/product/del/home/p/${id_produc}`);
//         alert('delete product success')
//         console.log(res)
//     } catch (error) {
//         console.error(error.message);
//     }
// }

export default Cards