import {createStore} from 'redux'
import reducer from '../reducers/reducer'

const initState = {
	username: "Janny",
    totalAmount: 2500701
}

export const store = createStore(reducer, initState)