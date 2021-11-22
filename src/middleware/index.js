import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import logger from './logger';
import checker from "./checker";


export default applyMiddleware(
 thunk,
 checker,
 logger,
)