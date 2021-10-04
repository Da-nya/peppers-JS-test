import React from 'react';
import Timer from './components/timer'
import StartText from './components/starttext'
import AutoInfo from './components/autoinfo'
import Auto from './components/automobile'

class App extends React.Component{
   width = 150;
   height = 75;
   maxX = 600 - this.width;
   maxY = 600 - this.height;

  constructor(props)
  {
    super(props);
    
    this.state = {
      gameState: 0,
      timer: null,
      interval:null,
      butText: "Начать игру",
      score: 0,
      posX: this.maxX/2,
      posY: this.maxY/2,
      carTranslate:0,
      carRotate:0,
      gameMode:0,
      nextTranslate: Math.floor(Math.random()*4),
      nextRotate: Math.floor(Math.random()*4),
      nextGameMode: Math.floor(Math.random()*2),
    }

    let my = this;
    document.addEventListener('keydown', function(event){
      if (my.state.gameState == 3)
      {
          let key;
          let carTranslate = my.state.carTranslate;
          let carRotate = my.state.carRotate;
          let gameMode = my.state.gameMode;
          if(event.code == "ArrowLeft")
            key = 0;
          if(event.code == "ArrowUp" )
            key = 1;
          if(event.code == "ArrowRight")
            key = 2;
          if(event.code == "ArrowDown")
            key = 3;
          
          if ((gameMode == 0 && key == carTranslate) || (gameMode == 1 && key == carRotate))
          {
             my.setState({score: my.state.score+1});
             my.newMove();
          }
  
          console.log("keypressed");
      }
    });
  }
  
  renderGame(gamestate)
  {
    if (gamestate == 0)
    {
      return <AutoInfo/>;
    }
    if (gamestate == 1)
    {
      return <Timer />;
    }
    if (gamestate == 2)
    {
      return <StartText/>;
    }
    if (gamestate == 3)
    {
      //let interval = this.state.interval;
      //return<script src="./components/automobile.js"/>
      let state = this.state;
      return <Auto 
      gameMode={state.gameMode} 
      carRotate={state.carRotate}
      carTranslate={state.carTranslate} 
      posX={state.posX} posY={state.posY}
      nextTranslate={state.nextTranslate} 
      nextRotate={state.nextRotate}
      nextGameMode={state.nextGameMode}
      >
      </Auto>
    }
  }

  renderStartText()
  {
    var my = this;
    var prom = new Promise(function(resolve, reject){
      
      my.setState({ timer:setTimeout(() => resolve('done'), 350)});
    }); 
    this.setState({gameState:2});
    prom.then(
      result => this.renderMainGame()
    );
  }

  newMove()
  {
    let gameMode = this.state.nextGameMode;
    let carTranslate = this.state.nextTranslate;
    let carRotate = this.state.nextRotate;
    this.setState({
      gameMode: gameMode,
      carTranslate: carTranslate,
      carRotate: carRotate,
      nextTranslate: Math.floor(Math.random()*4),
      nextRotate: Math.floor(Math.random()*4),
      nextGameMode: Math.floor(Math.random()*2),
    });
  }

  carMove(){
    let x = this.state.posX;
    let y = this.state.posY;
    let state = this.state;
    switch(state.carTranslate)
    {
      case 0:
          x -= 1;
          break;
      case 1:
        y -= 1;
        break;
      case 2:
        x += 1;
        break;
      case 3:
        y += 1;
        break;
    }

    if (x<0)
      x = this.maxX;
    if (x>this.maxX)
      x=0;
    if (y<0)
      y = this.maxY;
    if (y>this.maxY)
      y=0;
    this.setState({posX: x, posY: y});
  }
  renderMainGame()
  {
    this.newMove();
    this.setState({gameState:3, interval: setInterval(() => {this.carMove()
      
    }, 3)});
  }
  clear()
  {
    clearTimeout(this.state.timer);
    clearInterval(this.state.interval);
    this.setState({ timer: null, gameState: 0, butText: "Начать игру", score: 0});
  }
  startGame()
  {
    if (this.state.butText == "Начать заного")
      this.clear();
    if (this.state.butText == "Начать игру") {
      var my = this;
      
      var prom = new Promise(function (resolve, reject) {
        my.setState({ timer: setTimeout(() => resolve('done'), 4000) });

      });
      this.setState({ gameState: 1, butText: "Начать заного" });

      prom.then(
        result => this.renderStartText()
      );
    }
  }

  render() {
   
    return (
      <div>
        <h1>Автомобили</h1>
        <div>
          <p className="score">{"Счёт: " + this.state.score}</p>
        </div>

        <div className="main-window">
          {this.renderGame(this.state.gameState)}
        </div>
        <div className="info">
          <p className="game-info">Управление стрелочками клавиатуры.</p>
          <button onClick={() => this.startGame()}>{this.state.butText}</button>
        </div>

      </div>
    );
  }
}

export default App;
