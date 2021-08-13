import {createStore, combineReducers} from "redux"
import users from "./reducers/users.js"

const reducer = combineReducers({
    users,
})

const configStore = () => createStore(reducer)

export default configStore