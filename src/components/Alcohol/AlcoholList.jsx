import React from 'react';
import PropTypes from 'prop-types';
import Alcohol from './Alcohol';

function AlcoholList(props){
  let myList;
  if(typeof props.alcoholList === "undefined"){
    myList = {};
  }else{
    myList = props.alcoholList;
  }
  console.log(myList);
  console.log(typeof props.alcoholList);
  return(
    <div>
      <hr/>
      {Object.keys(myList).map(function(alcId){
        var alcohol = props.alcoholList[alcId];
        return(
          <Alcohol name={alcohol.name}
          alcoholContent={alcohol.alcoholContent}
          proof={alcohol.proof}
          key={alcId}
          alcoholId={alcId}
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
};

export default AlcoholList;
