import React from "react";

export default class Timer extends React.Component{
  render(){
  return (
    <div className="wrapper">
      <div className="timer">
        <div className="timer-line"></div>
        <div className="timer-body">
          <div className="timer-counter">
            <span>3</span><span>2</span><span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
