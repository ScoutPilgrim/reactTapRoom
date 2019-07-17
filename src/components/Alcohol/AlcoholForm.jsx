import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import c from './../../constants';

function AlcoholForm(props){
  let _name = null;
  let _alcoholContent = null;
  let _proof = null;

  function handleNewAlcoholFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_ALC,
      id: uuid.v4(),
      name: _name.value,
      alcoholContent: _alcoholContent.value + '%',
      proof: (parseInt(_proof.value)*2).toString()
    };

    dispatch(action);

    _name = '';
    _alcoholContent = '';
    _proof = '';
  }

  return(
    <div>
      <form onSubmit={handleNewAlcoholFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Name of Alcohol"
          ref={(input)=>{_name = input;}}
        />
        <input
          type="text"
          id="alcoholContent"
          placeholder="Alcohol Content"
          ref={(input)=>{
            _alcoholContent = input;
            _proof = input;
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

AlcoholForm.propTypes = {
  onNewAlcoholCreation: PropTypes.func
};

export default connect()(AlcoholForm);
