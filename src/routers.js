import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./views/home/index"
import Detail from "./views/detail_product/index_detail"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/detail/:id_product" component={Detail}></Route>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App