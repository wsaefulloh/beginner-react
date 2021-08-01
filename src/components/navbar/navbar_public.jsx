import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo from "../asset/logo.png";

const Navigasi = () => {
    return (
        <header>
            <nav className="bg-light d-md-block d-none navbar shadow-sm fixed-top">
                <div className="container justify-content-between align-items-center">
                        <img src={logo} alt="" height="35px" width="auto" />
                    <form className="col-6 text-end" action>
                        <input
                            type="text"
                            className="search-box text-reguler"
                            placeholder="Search"
                        />
                        <button className="sort">
                            <img src="../asset/sort.png" />
                        </button>
                    </form>
                    <div className="col-4 text-end box-info">
                        <a href="My-Bag/mybag_index.html">
                            <img className="me-3" src="../asset/shopping chart.png" />
                        </a>
                        <a href="Login_page/login_customer.html">
                            <button className="btn-login text-reguler">Login</button>
                        </a>
                        <a href="#">
                            <button className="btn-signup text-reguler">Signup</button>
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="bg-light d-md-none d-block navbar shadow-sm fixed-top">
                <div className="container justify-content-center align-items-center">
                    <a className="navbar-brand" href="./home.html">
                        <img src="../asset/logo.png" alt="" height="35px" width="auto" />
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
                                src="../asset/Mockup Web (4)/home icon/inactive.png"
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
                                src="../asset/Mockup Web (3)/shop icon/inactive.png"
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
                                src="../asset/Mockup Web (2)/shopping_bag icon/inactive.svg"
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
                                src="../asset/Mockup Web (5)/heart icon/inactive.png"
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
                                src="../asset/Mockup Web (6)/profile icon/account_circle.png"
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
