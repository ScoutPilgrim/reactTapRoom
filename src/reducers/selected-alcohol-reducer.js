import c from './../constants';

export default(state = {}, action) => {
  switch (action.type){
    case c.SELECT_ALC:
      return action.alcId;
    default:
      return state;
  }
};
