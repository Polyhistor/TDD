import CommentsReducer from "reducers/comment";
import { SAVE_COMMENT } from "actions/type";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = CommentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknown type", () => {
  const newState = CommentsReducer([], {});

  expect(newState).toEqual([]);
});
