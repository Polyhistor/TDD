import React from "react";
import { connect } from "react-redux";

const Commentlist = props => {
  console.log(props);
  const renderComments = () => {
    return props.comments.map((comment, idx) => {
      return <li key={idx}>{comment}</li>;
    });
  };

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(Commentlist);
