import React from 'react';
import { Switch, Route } from 'react-router-dom';
import uuid  from 'uuid';
import AlcoholForm from './Alcohol/AlcoholForm';
import AlcoholList from './Alcohol/AlcoholList';
import Header from './Menu/Header';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterAlcoholList: {},
      selectedAlcohol: null
    };
    this.handleAddingNewAlcohol = this.handleAddingNewAlcohol.bind(this);
    this.handleChangingSelectedAlcohol = this.handleChangingSelectedAlcohol.bind(this);
  }

  handleAddingNewAlcohol(newAlc){
    var newAlcId = uuid.v4();
    var newMasterAlcoholList = Object.assign({}, this.state.masterAlcoholList, {
      [newAlcId]: newAlc
    });
    this.setState({masterAlcoholList: newMasterAlcoholList});
  }

  handleChangingSelectedAlcohol(alcoholId){
    this.setState({selectedAlcohol: alcoholId});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={(props)=><AlcoholList alcoholList = {this.state.masterAlcoholList}
          currentRouterPath={props.location.pathname}
          onAlcoholSelection={this.handleChangingSelectedAlcohol}
          selectedAlcohol={this.state.selectedAlcohol} />}/>
          <Route exact path="/newalc" render={()=><AlcoholForm onNewAlcoholCreation={this.handleAddingNewAlcohol}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
