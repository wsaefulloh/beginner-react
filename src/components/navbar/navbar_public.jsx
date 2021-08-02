import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo from "../asset/logo.png";
import sort from "../asset/sort.png";
import shopping_chart from "../asset/shopping chart.png"
import icon_home from "../asset/home_icon.png";
import icon_shop from "../asset/cart_icon.png";
import icon_bag from "../asset/shoppingbag_icon.svg";
import icon_favorite from "../asset/favorite_icon.png";
import icon_profile from "../asset/profile_icon.png";

const Navigasi = () => {
    return (
        <header>
            <nav className="bg-light d-md-block d-none navbar shadow-sm fixed-top">
                <div className="container justify-content-between align-items-center">
                        <div className="navbar-brand" href="#home">
                            <img src={logo} alt="" height="35px" width="auto" />
                        </div>
                    <form className="col-6 text-end" action>
                        <input
                            type="text"
                            className="search-box text-reguler"
                            placeholder="Search"
                        />
                        <button className="sort">
                            <img src={sort} alt="" />
                        </button>
                    </form>
                    <div className="col-4 text-end d-flex justify-content-end align-items-center">
                        <div href="My-Bag/mybag_index.html">
                            <img className="me-3" src={shopping_chart} alt="" />
                        </div>
                        <div href="Login_page/login_customer.html">
                            <button className="btn-login text-reguler">Login</button>
                        </div>
                        <div href="#">
                            <button className="btn-signup text-reguler">Signup</button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-light d-md-none d-block navbar shadow-sm fixed-top">
                <div className="container justify-content-center align-items-center">
                    <a className="navbar-brand" href="./home.html">
                        <img src={logo} alt="" height="35px" width="auto" />
                    </a>
                </div>
            </nav>
            <nav className="d-md-none d-block navbar bg-light shadow-sm navbar-bottom fixed-bottom">
                <ul className="nav d-flex justify-content-around">
                    <li>
                        <a
                            className="d-flex flex-column text-reguler text-center align-items-center"
                            href
                        >
                            <img
                                className="nav-icon"
                                src={icon_home}
                                alt=""
                            />
                            <span className="nav-title">Home</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="d-flex flex-column text-reguler text-center align-items-center"
                            href
                        >
                            <img
                                className="nav-icon"
                                src={icon_shop}
                                alt=""
                            />
                            <span className="nav-title">Shop</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="d-flex flex-column text-reguler text-center align-items-center"
                            href
                        >
                            <img
                                className="nav-icon"
                                src={icon_bag}
                                alt=""
                            />
                            <span className="nav-title">Bag</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="d-flex flex-column text-reguler text-center align-items-center"
                            href
                        >
                            <img
                                className="nav-icon"
                                src={icon_favorite}
                                alt=""
                            />
                            <span className="nav-title">Favorites</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="d-flex flex-column text-reguler text-center align-items-center"
                            href
                        >
                            <img
                                className="nav-icon"
                                src={icon_profile}
                                alt=""
                            />
                            <span className="nav-title">Profile</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigasi;
