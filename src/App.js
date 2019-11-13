import React, {Component} from 'react';
import './App.css';
import Home from '../src/Home';
import PlayerGame from '../src/PlayerGame';
import Result from '../src/Result';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Mode:'Home',
      UserValue: 0,
      Computer1Value: 0,
      previosMode:'Home'
    }
    this.ChangeMode = this.ChangeMode.bind(this);
  }

  ChangeMode(modeValue, value1, value2, preMode)
  {
    this.setState({Mode:modeValue, UserValue:value1, Computer1Value: value2,previosMode: preMode});
  }

  render(){
    var content;
    console.log(this.state.Mode);
    if(this.state.Mode == 'Home')
    {
      content = <Home onModeChange={this.ChangeMode} />
    }
    else if (this.state.Mode == 'Player')
    {
      content = <PlayerGame onModeChange={this.ChangeMode} Mode={this.state.Mode}/>
    }
    else if (this.state.Mode == 'Computer')
    {
      content = <PlayerGame onModeChange={this.ChangeMode} Mode={this.state.Mode}/>
    }
    else if (this.state.Mode == 'Result')
    {
      content = <Result onModeChange={this.ChangeMode} value1={this.state.UserValue} value2={this.state.Computer1Value} preMode={this.state.previosMode} />
    }
  return (
    <div className="App">
      <header className="App-header">
      {content}
      </header>
    </div>
  );
}
}

