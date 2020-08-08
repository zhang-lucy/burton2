// Bouncing DVD Logo
var speed = 10;
var backgroundColor = "white";
var messageColor = "rgba(0,0,0,.5)";
var bounceSize = 35; //percentage of windowHeight

let x;
let y;
let xspeed;
let yspeed;

let width = window.innerWidth;
let height = window.innerHeight;

let r, g, b;

// var dvd = document.getElementById("myImg");
var imgPath1 = 'img/floorpic.jpg';
var imgPath2 = 'img/flounge.jpg';
var imgPath3 = 'img/peanuts.jpg';
var imgPath4 = 'img/retreat1.jpg';
var imgPath5 = 'img/purell.jpg';


//Create a new Image object.
// dims = 2000,1360
var scale = 2000/1360;
var dvd = new Image();
//Set the src of this Image object.
dvd.src = imgPath1;



function resetBG() {
    context.clearRect(0, 0, width, height);
    context.fillStyle = backgroundColor;
    // ctx.fill();
    context.fillRect(0, 0, width, height);
}

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

x = 0;
y = 0;
xspeed = speed;
yspeed = speed;



var z = 0
var paths = [imgPath1, imgPath2, imgPath3, imgPath4, imgPath5]
function pickColor() {
  z = z+1;
  if (z >= paths.length) {
      z = z - paths.length;
  }
  dvd.src = paths[z];
}



// Draw the DVD logo//
var once = true;
dvd.onload = function(){
    if (once == true) {
        if (width >= height) {
            dHeight = height*(bounceSize/100);
            dWidth = dHeight*scale;
        }
        else if (height > width) {
            dWidth = width*(bounceSize/100);
            dHeight = dWidth*(1/scale);
        }
        //Draw the image onto the canvas.
        context.drawImage(dvd, x, y, dWidth, dHeight);
        once = false;
        bounce();
        blink();
    }
}

function bounce() {
    var intervalID = setInterval(function () {
        x = x + xspeed;
        y = y + yspeed

        if (x + dWidth >= width) {
            xspeed = -xspeed;
            x = width - dWidth;
            pickColor();
        } else if (x <= 0) {
            xspeed = -xspeed;
            x = 0;
            pickColor();
        }

        if (y + dHeight >= height) {
            yspeed = -yspeed;
            y = height - dHeight;
            pickColor();
        } else if (y <= 0) {
            yspeed = -yspeed;
            y = 0;
            pickColor();
        }

        resetBG();
        context.drawImage(dvd, x, y, dWidth, dHeight);
        
    }, 100);
}

var t=0;
var message = document.getElementById("message");

function blink() {
    var intervalID2 = setInterval(function () {
        t = t+1;
        if (t%2 == 0) {
            message.style.color = "rgba(0,0,0,0)";
        }
        else {
            message.style.color = messageColor;
        }
    }, 630);
}