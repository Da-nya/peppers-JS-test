import React from "react";
import logo from "../img/red_car1.png"
import logo2 from "../img/orange_car1.png"
import arrow_img from "../img/arrow-keys.png"

export default function (){
    return(
        <div className="wrapper show-anim" >
            <div>
                <p className="red-info">Если автомобиль красный, то нужно выбрать направление его движения.</p>
                <img className= "cars" src ={logo}/>
                <div className= "arrow">
                    <img className ="arrow-right" src ={arrow_img}/>
                </div>
            </div>
            <div>
                <p className="orange-info">Если оранжевый, то указать в какую сторону он направлен.</p>
                <img className= "cars" src ={logo2}/>
                <div className= "arrow">
                    <img className ="arrow-left" src ={arrow_img}/>
                </div>
            </div>
            
        </div>
    )
}