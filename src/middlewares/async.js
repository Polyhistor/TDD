export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on it's payload property.
  // if it does, then wait for it to resolve, if it doesn't, then send the action on to the next middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // however if there is a promise we want to wait for it to resolve the data,
  // we will then create an action with that data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
