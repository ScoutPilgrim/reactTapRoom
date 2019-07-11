import React from 'react';
import PropTypes from 'prop-types';

function Alcohol(props){
  return(
    <div onClick={()=>{props.onAlcoholSelection(props.alcoholId);}}>
      <h3>{props.name}</h3>
      <ul>
        <li>Alcohol Content - {props.alcoholContent}</li>
        <li>{props.proof} Proof</li>
      </ul>
    </div>
  );
}

Alcohol.propTypes = {
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  proof: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onAlcoholSelection: PropTypes.func,
  alcoholId: PropTypes.string.isRequired
};

export default Alcohol;
