import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

const App = props => {
  const renderButton = () => {
    if (props.auth) {
      return <button onClick={() => props.changeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => props.changeAuth(true)}>Sign In</button>;
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  actions
)(App);
