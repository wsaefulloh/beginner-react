import "../card_product/card.scoped.css"
import React from "react"
import { Link } from "react-router-dom"
import star from "../asset/star_active.png"
import "bootstrap/dist/css/bootstrap.min.css";

function Cards(props) {
    return (
        <div className="col py-3">
            <Link to={`/p/${props.id_product}`}>
                <div className="card shadow-sm h-100">
                    <img className="card-img-top img-product" src={props.image_product} alt=""/>
                    <div className="m-0 card-body">
                        <h6 className="m-0 text-bold">{props.name_product}</h6>
                        <div className="price text-bold">{`Rp. ${props.price_product}`}</div>
                        <small className="text-secondary">{props.brand_product}</small>
                        <div className="d-flex">
                            <img src={star} alt="" width="auto" height="20px" />
                            <img src={star} alt="" width="auto" height="20px" />
                            <img src={star} alt="" width="auto" height="20px" />
                            <img src={star} alt="" width="auto" height="20px" />
                            <img src={star} alt="" width="auto" height="20px" />
                            <p className="text-reguler mx-lg-1 text-secondary">(5/5)</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cards