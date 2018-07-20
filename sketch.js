function setup(){
    createCanvas(600,600);
}

let x1 = 275
let x2 = 300
let x3 = 325
let y1 = 550
let y2 = 500
let y3 = 550
let bulletX = x2
let bulletY = y2
let bulletSpeed= 0
function draw(){

    if(keyIsDown(LEFT_ARROW)){
        x1 -= 5
        x2 -= 5
        x3 -= 5
        bulletX -= 5
    }
    if(keyIsDown(RIGHT_ARROW)){
        x1 += 5
        x2 += 5
        x3 += 5
        bulletX += 5
    }
    if(bulletSpeed === 0){
        bulletX = x2
    }
    if(keyIsDown(32)){
       bulletSpeed = 15
    }
    bulletY -= bulletSpeed

    if(bulletY <= 0 ){
        bulletY = y2
        bulletX = x2
        bulletSpeed = 0
    }    

    clear()
    background(random(255),random(255),random(255))

    rect(50,400,100,50)
    rect(250,400,100,50)
    rect(450,400,100,50)
    rect(10,10,25,25)
    rect(40,10,25,25)
    rect(70,10,25,25)
    rect(100,10,25,25)
    rect(130,10,25,25)
    rect(160,10,25,25)
    rect(190,10,25,25)
    rect(220,10,25,25)
    rect(250,10,25,25)
    rect(280,10,25,25)
    rect(310,10,25,25)
    rect(340,10,25,25)
    rect(370,10,25,25)
    rect(400,10,25,25)
    rect(430,10,25,25)
    rect(460,10,25,25)
    rect(490,10,25,25)
    rect(520,10,25,25)
    rect(550,10,25,25)
    rect(580,10,25,25)

    rect(10,40,25,25)
    rect(40,40,25,25)
    rect(70,40,25,25)
    rect(100,40,25,25)
    rect(130,40,25,25)
    rect(160,40,25,25)
    rect(190,40,25,25)
    rect(220,40,25,25)
    rect(250,40,25,25)
    rect(280,40,25,25)
    rect(310,40,25,25)
    rect(340,40,25,25)
    rect(370,40,25,25)
    rect(400,40,25,25)
    rect(430,40,25,25)
    rect(460,40,25,25)
    rect(490,40,25,25)
    rect(520,40,25,25)
    rect(550,40,25,25)
    rect(580,40,25,25)

    fill(random(255),random(255),random(255))
    ellipse(bulletX,bulletY,25)

    fill(random(255),random(255),random(255))
    triangle(x1,550,x2,500,x3,550)
}
 