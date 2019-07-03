import React, { Component } from 'react';

class Countdown extends Component {
  state = {
    secLeft: '',
    minLeft: '',
    hrsLeft: '',
    daysLeft: ''
  };

  componentDidMount = () => {
    this.inter = setInterval(() => {
      this.timeLeft();
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.inter);
  }

  //calculate time
  timeLeft = () => {
    let future_date = '05/21/2020';
    let t = Date.parse(future_date) - Date.parse(new Date());
    let secLeft = Math.floor((t / 1000) % 60);
    let minLeft = Math.floor((t / 1000 / 60) % 60);
    let hrsLeft = Math.floor((t / (1000 * 60 * 60)) % 24);
    let daysLeft = Math.floor(t / (1000 * 60 * 60 * 24));

    //check for double digit
    secLeft = this.check(secLeft);
    minLeft = this.check(minLeft);
    hrsLeft = this.check(hrsLeft);
    daysLeft = this.check(daysLeft);
    this.setState(() => {
      return {
        secLeft,
        minLeft,
        hrsLeft,
        daysLeft
      };
    });
  };
  //check Unit
  check(unit) {
    if (unit.toString().length < 2) {
      unit = '0' + unit;
    }
    return unit;
  }

  render() {
    const { secLeft, minLeft, hrsLeft, daysLeft } = this.state;
    return (
      <div className='countdown container'>
        <div className='countdown-about'>
          <p>NEXT BIG SHOW</p>
          <h1>Cannes Festival</h1>
          <p>We are one</p>
        </div>
        <div className='countdown-timer'>
          <div>
            <p>After</p>
          </div>
          <div className='counter'>
            <div className='days'>
              <h1>{daysLeft}</h1>
              <p>Days</p>
            </div>
            <div className='hrs'>
              <h1>{hrsLeft}</h1>
              <p>Hrs</p>
            </div>
            <div className='min'>
              <h1>{minLeft}</h1>
              <p>Mns</p>
            </div>
            <div className='secs'>
              <h1>{secLeft}</h1>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
