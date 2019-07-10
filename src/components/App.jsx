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
    this.handleAddingNewAlcohol = this.handleAddingNewAlcohol.bind(this)
  }

  handleAddingNewAlcohol(newAlc){
    var newAlcId = uuid.v4();
    var newMasterAlcoholList = Object.assign({}, this.state.masterAlcoholList, {
      [newAlcId]: newAlc
    });
    this.setState({masterAlcoholList: newMasterAlcoholList});
  }
  
  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={()=><AlcoholList alcoholList = {this.state.masterAlcoholList} />}/>
          <Route exact path="/newalc" render={()=><AlcoholForm onNewAlcoholCreation={this.handleAddingNewAlcohol}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;