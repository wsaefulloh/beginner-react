import '../category/category.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import Category1 from "../asset/cat_shirt.png";
import Category2 from "../asset/cat_jacket.png";
import Category3 from "../asset/cat_shoes.png";
import Category4 from "../asset/cat_pants.png";
import Category5 from "../asset/cat_shorts.png";

function Category() {
    return (
        <section className="container">
            <div className="my-5">
                <div className="my-3">
                    <h3 className="text-bold m-0">Category</h3>
                    <small className="text-secondary text-reguler">What are you currently looking for</small>
                </div>
                <div className="text-center row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
                    <div className="col py-3">
                        <img src={Category1} alt="" />
                    </div>
                    <div className="col py-3">
                        <img src={Category2} alt="" />
                    </div>
                    <div className="col py-3">
                        <img src={Category3} alt="" />
                    </div>
                    <div className="col py-3">
                        <img src={Category4} alt="" />
                    </div>
                    <div className="col py-3">
                        <img src={Category5} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Category