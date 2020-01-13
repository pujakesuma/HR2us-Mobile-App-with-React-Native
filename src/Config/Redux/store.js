import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

import reducers from './Reducers/Index'

const logger = createLogger();
const enhancers = applyMiddleware(logger, promiseMiddleware);
const store = createStore(reducers, enhancers);

export default store