import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    // this.time = this.time.bind(this);
    this.tick = this.tick.bind(this);
  }

  getTime(dateObject) {
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;

    return time;
  }

  tick() {
    let time = new Date();
    this.setState( { time } ); //pass in keyword of state in here (time)
  }

  componentDidMount() {
    setInterval( this.tick, 1000); // don't invoke the function here
  }


  render() {
    let timeString = this.getTime(this.state.time);
    return (<h1>{ timeString }</h1>);
  }


}


export default Clock;
