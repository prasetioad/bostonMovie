import { combineReducers } from 'redux'
import userReducer from './user'

const rootReducer = combineReducers({
    store : userReducer,
})

export default rootReducer