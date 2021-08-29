import { combineReducers } from "redux";

import staticContentReducer from "./StaticContent/reducer";

const rootReducer = combineReducers({
  staticContent: staticContentReducer,
});

export default rootReducer;
