import React from 'react';
import PropTypes from 'prop-types';

function AlcoholForm(props){
  let _name = null;
  let _alcoholContent = null;
  let _proof = null;

  function handleNewAlcoholFormSubmission(event){
    event.preventDefault();
    props.onNewAlcoholCreation({name: _name.value, alcoholContent: _alcoholContent.value + '%', proof: (parseInt(_proof.value)*2).toString()});
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

export default AlcoholForm;
