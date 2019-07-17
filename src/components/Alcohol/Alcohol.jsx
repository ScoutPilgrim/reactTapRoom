import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../../constants';

function Alcohol(props){

  function onAlcoholSelection(alcId){
    const {dispatch} = props;
    const action = {
      type: c.SELECT_ALC,
      alcId: alcId
    };
    dispatch(action);
  }

  return(
    <div onClick={()=>{onAlcoholSelection(props.alcoholId);}}>
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
  alcoholId: PropTypes.string.isRequired
};

export default connect()(Alcohol);
