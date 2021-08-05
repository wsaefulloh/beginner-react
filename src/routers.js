import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePublic from "./views/home/index"
import HomeUser from "./views/home/home_user"
import DetailPublic from "./views/detail_product/index_detail"
import DetailUser from "./views/detail_product/index_detail_user"
import LoginSeller from "./views/login_page/login_seller"
import LoginCust from "./views/login_page/login_customer"
import ProfileStore from "./views/profile_page/store"
import ProfileMyProduct from "./views/profile_page/myproduct"
import ProfileMyOrder from "./views/profile_page/myorder"
import ProfileAdd from "./views/profile_page/add"
import Bag from "./views/bag_page/bag"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home/profile/store" component={ProfileStore}></Route>
                <Route exact path="/home/profile/myproduct" component={ProfileMyProduct}></Route>
                <Route exact path="/home/profile/myorder" component={ProfileMyOrder}></Route>
                <Route exact path="/home/profile/add" component={ProfileAdd}></Route>
                <Route exact path="/home/bag" component={Bag}></Route>
                <Route exact path="/login-cust" component={LoginCust}></Route>
                <Route exact path="/login-seller" component={LoginSeller}></Route>
                <Route exact path="/home/p/:id_product" component={DetailUser}></Route>
                <Route exact path="/p/:id_product" component={DetailPublic}></Route>
                <Route exact path="/home" component={HomeUser}></Route>
                <Route exact path="/" component={HomePublic}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App