import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const CommentBox = props => {
  console.log(props);
  const [comment, setComment] = useState("");

  useEffect(() => {
    shouldNavigateAway();
  });

  const shouldNavigateAway = () => {
    if (!props.auth) {
      console.log("I NEED TO LEAVE");
    }
  };

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

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
