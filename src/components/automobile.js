import red1 from "../img/red_car1.png"
import red2 from "../img/red_car2.png"
import red3 from "../img/red_car3.png"
import red4 from "../img/red_car4.png"
import orange1 from "../img/orange_car1.png"
import orange2 from "../img/orange_car2.png"
import orange3 from "../img/orange_car3.png"
import orange4 from "../img/orange_car4.png"

export default function (props){
    const matr = [
        [red1, red2, red3, red4],
        [orange1, orange2, orange3, orange4]
    ];
    var carStyle = {
        width: '150px',
        height: '75px',
        position: 'absolute',
        transform: 'translate('+props.posX +'px,'+ props.posY+'px)'
    }
    if (props.carRotate == 1 || props.carRotate == 3)
    {
        carStyle = {
            width: '75px',
            height: '150px',
            position: 'absolute',
            transform: 'translate('+props.posX +'px,'+ props.posY+'px)'
        }
    }
    return <img style={carStyle} src={matr[props.gameMode][props.carRotate]}/>;
}