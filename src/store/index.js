
import { legacy_createStore as createStore,combineReducers,applyMiddleware } from "redux";
import { Countering } from "./Slicer/counter";
import { Users } from "./Slicer/user";
import { addReducer } from "./Slicer/people";
import {fetchUser,fetchReducer} from './Slicer/fetch'
import thunk from "redux-thunk";
const store=createStore(combineReducers({
    Counter:Countering,
    Users:Users,
    People:addReducer,
    fetch:fetchReducer
}),{
    Counter:30, 
    Users:[],
    People:[{id:7,name:'valodya'},{id:5,name:'norayr'}]
},
applyMiddleware(thunk)
)
store.dispatch(fetchUser())

export default store