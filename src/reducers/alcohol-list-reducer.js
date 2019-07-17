import c from './../constants';



export default(state = {}, action) => {
  let newState;
  const { name, alcoholContent, proof, id } = action;

  switch(action.type){
    case c.ADD_ALC:
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          alcoholContent: alcoholContent,
          proof: proof,
          id: id
        }
      });
      return newState;
      //add more cases here if implemented

    default:
      return state;
  }


};
