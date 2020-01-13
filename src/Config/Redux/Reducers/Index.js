import { combineReducers } from 'redux'

// import taskEngineers from './engineers'
// import taskCompany from './company'
import postRegister from './userAuth'
import postLogin from './userAuth'
import engineers from './engineers'

const reducers = combineReducers({
    // taskEngineers,
    // taskCompany,
    postLogin,
    postRegister,
    engineers
})

export default reducers