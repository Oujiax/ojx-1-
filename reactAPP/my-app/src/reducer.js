import {combineReducers} from "redux"
import reducer from "./reducer"
const count =(state=0,action) =>{
    console.log(state,action);
    switch(action.type){
        case "ADD":
            return state+1;
            
    }
}
const reduce = combineReducers({
    count
})
export default reduce;