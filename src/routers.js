import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HomeUser from "./views/home/Home page/home_user"
import DetailUser from "./views/home/Detail page/index_detail_user"
import LoginSeller from "./views/login/Login Seller/login"
import LoginCust from "./views/login/Login Customers/login"
import RegistSeller from "./views/login/Register Seller/regist-admin"
import RegistCust from "./views/login/Register Customers/regist-member"
import ProfileAdd from "./views/profile/Add Page/add"
import ProfileMyProduct from "./views/profile/MyProduct/myproduct"
import ProfilePage from "./views/profile/Profile/profile"
import Bag from "./views/bag/bag"
import Result from "./views/home/Result page/resultpage"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/search/:name" component={Result}></Route>
                <Route exact path="/profile/edit" component={ProfilePage}></Route>
                <Route exact path="/profile/add" component={ProfileAdd}></Route>
                <Route exact path="/profile/myproduct" component={ProfileMyProduct}></Route>
                <Route exact path="/bag" component={Bag}></Route>
                <Route exact path="/login-cust" component={LoginCust}></Route>
                <Route exact path="/login-seller" component={LoginSeller}></Route>
                <Route exact path="/register-cust" component={RegistCust}></Route>
                <Route exact path="/register-seller" component={RegistSeller}></Route>
                <Route exact path="/p/:id_product" component={DetailUser}></Route>
                <Route exact path="/" component={HomeUser}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App