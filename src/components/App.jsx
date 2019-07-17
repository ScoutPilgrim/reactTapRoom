import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import uuid  from 'uuid';
import AlcoholForm from './Alcohol/AlcoholForm';
import AlcoholList from './Alcohol/AlcoholList';
import Header from './Menu/Header';
import { connect } from 'react-redux';
import c from './../constants';
import PropTypes from 'prop-types';

class App extends React.Component {


  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={()=><AlcoholList alcoholList = {this.props.masterAlcoholList} />}/>
          <Route path="/newalc" render={()=><AlcoholForm />}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterAlcoholList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterAlcoholList: state.alcoholList
  };
};

export default withRouter(connect(mapStateToProps)(App));
