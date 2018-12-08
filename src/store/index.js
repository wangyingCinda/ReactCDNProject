import {createStore,combineReducers} from "redux"
import bannerReducer from"./Reducers/bannerReducer"
import sidebarReducer from"./Reducers/sidebarReducer"

const reducer = combineReducers({  
	
	bannerReducer,
	sidebarReducer
})

	


const store =  createStore(reducer)
export default store