import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

const CommentBox = props => {
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    props.saveComment(comment);

    setComment("");
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <h4> add a coment</h4>
        <textarea onChange={e => setComment(e.target.value)} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={props.fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
