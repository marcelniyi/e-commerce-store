import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

function saveToLocalstorage(state){
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('Products', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage(){
  try {
    const serializedState = localStorage.getItem('Products')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalstorage(store.getState()))

export default store
