import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'


const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
const user =  JSON.parse(oldproduct);

function userReducer(state = user, action) {
    switch (action.type) {
        case 'GET_NAME':
            return state.name
        case 'CHANGE_NAME':

            localStorage.setItem("products",JSON.stringify(action.payload));
            return [state, action.payload];

        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer
})


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
)
