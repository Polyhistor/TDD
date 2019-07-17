import { combineReducers } from "redux";
import CommentsReducer from "reducers/comment";
import AuthReducer from "reducers/auth";

export default combineReducers({
  comments: CommentsReducer,
  auth: AuthReducer
});
