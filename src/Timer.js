import React, {Component} from 'react';

export default class Timer extends Component {
    constructor (props) {
      super(props)
      this.state = {count: 5}
      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
    }
    componentWillMount()
    {
        this.startTimer();
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    tick() {
        if (this.state.count <= 0)
            this.stopTimer();
        else
            this.setState({ count: (this.state.count - 1) })
    }
    startTimer() {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer() {
      clearInterval(this.timer)
      var onFoul = this.props.foul;
      onFoul(-1);
    }
    render () {
      return (
        <div className='timer'>
          <h1>{this.state.count}</h1>
        </div>
      )
    }
  }