import React from 'react';
import PropTypes from 'prop-types';
import Alcohol from './Alcohol'; 

function AlcoholList(props){
  return(
    <div>
      <hr/>
      {Object.keys(props.alcoholList).map(function(alcoholId){
        var alcohol = props.alcoholList[alcoholId];
        return(
          <Alcohol name={alcohol.name}
          alcoholContent={alcohol.alcoholContent}
          proof={alcohol.proof}
          onAlcoholSelection={props.onAlcoholSelection}
          key={alcoholId}
          alcoholId={alcoholId}
          currentRouterPath={props.currentRouterPath}
          />
        );
      })}
    </div>
  );
}

AlcoholList.propTypes = {
  alcoholList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onAlcoholSelection: PropTypes.func
};

export default AlcoholList;