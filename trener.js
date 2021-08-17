let car = document.querySelector(".cars");
let score = document.querySelector(".score");
let width = 150;
let height = 75;
const maxX = 600 - width;
const maxY = 600 - height;
let posX = maxX/2;
let posY = maxY/2;
let carTranslate;
let carRotate;
let gameMode;
let move;
let count;

function moveLeft()
{
    posX -= 1;
    if (posX<0)
        posX = maxX;
    car.style.left = posX + "px";
}

function moveRight()
{
    posX += 1;
    if (posX>maxX)
        posX = 0;
    car.style.left = posX + "px";
}

function moveUp()
{
    posY -= 1;
    if (posY<0)
        posY = maxY;
    car.style.top = posY + "px";
}

function moveDown()
{
    posY += 1;
    if (posY>maxY)
        posY = 0;
    car.style.top = posY + "px";
}

function translate()
{
    if (carTranslate == 0)
        moveLeft();
    if (carTranslate == 1)
        moveUp();
    if (carTranslate == 2)
        moveRight();
    if (carTranslate == 3)
        moveDown();
}

function newMove()
{
    gameMode = Math.floor(Math.random()*2);
    carTranslate = Math.floor(Math.random()*4);
    carRotate = Math.floor(Math.random()*4);
    let str ="red_car";
    if (gameMode == 1)
        str = "orange_car";

    if (carRotate == 0)
    {
         car.src = "img/"+str+".png";
         car.style.width = width + "px";
         car.style.height = height + "px";
    }
    if (carRotate == 1)
    {
        car.src = "img/"+str+"4.png";
        car.style.width = height + "px";
        car.style.height = width + "px";
    }
    if (carRotate == 2)
    {
        car.src = "img/"+str+"2.png";
        car.style.width = width + "px";
        car.style.height = height + "px";
    }
    if (carRotate == 3)
    {
        car.src = "img/"+str+"3.png";
        car.style.width = height + "px";
        car.style.height = width + "px";
    }
}

document.addEventListener('keydown', function(event){
    if (count <10)
    {
        let key;
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
                count ++;
                score.textContent = "Счёт: " + count + "/10";
                newMove();
        }

        console.log("keypressed");
    }
    if(count >= 10)
    {
        clearInterval(move);
        car.style.visibility="hidden";
    }
});

function startGame()
{
    clearInterval(move);
    car.style.visibility="visible";
    posX = maxX/2;
    posY = maxY/2;
    car.style.left = posX + "px";
    car.style.top = posY + "px";
    move = setInterval(translate, 3);
    count = 0;
    score.textContent = "Счёт: " + count + "/10";
    newMove();
}