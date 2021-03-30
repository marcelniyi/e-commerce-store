import { db } from '../../Configurations'

export const getProducts = (data) => ({
    type: 'FETCH_PRODUCTS',
    payload: data
})


export const fetchProducts = () => async (dispatch) => {
  const serializedState = localStorage.getItem(stateName) || []
  dispatch(getProducts(JSON.parse(serializedState)))
}
