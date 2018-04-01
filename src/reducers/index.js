import { combineReducers } from 'redux';

// import { routeReducer } from 'react-router-redux';
// import counter from './counter';

import access from './access';

import loading from './loading';

const rootReducer = combineReducers({
  access,
  loading,
//   routing: routeReducer,
});

export default rootReducer;
