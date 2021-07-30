/// Imports: Dependencies
import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';

/// Redux: Root Reducer
const rootReducer = combineReducers({
  settingsReducer,
});
// Exports
export default rootReducer;
