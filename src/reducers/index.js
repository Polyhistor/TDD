import { combineReducers } from "redux";
import CommentsReducer from "reducers/comment";

export default combineReducers({
  comments: CommentsReducer
});
