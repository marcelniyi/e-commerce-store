
const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return [...state, action.payload]

        case 'ADD_PRODUCTS':
            return [...state, action.payload]

        case 'REMOVE_PRODUCTS':
            const newState = [...state]
            newState.splice(action.payload, 1)
            return newState

        default:
            return state
    }

}

export default productsReducer
