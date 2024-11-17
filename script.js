
//var x = document.getElementById("howdareyou");
var state;
var statecounter1 = 0;
var statecounter2 = 0;
var statecounter3 = 0;
var statecounter4 = 0;
var waitcounter = 0;
var dodgewaitcounter = 0;
var dodge = 0;
var flipped = 3;
var sounddelay = 55;
var dodgedelay = 50;
var state1timer = 0;
var state4delay = 0;
state4delaysetpoint = 550;

var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;
var rot;
var element = document.getElementById("cursorFollower");


var turretBase = document.getElementById("cursorFollower");

var turretAngle=0;
var centerX = 300, centerY = 200;  

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;



});

setInterval(function () {
  xp += (mouseX - xp) / 45; //15
  yp += (mouseY - yp) / 45;

  cursorFollower.style.left = xp - 120 + "px";
  cursorFollower.style.top = yp - 111 + "px";
}, 10);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 55; //25
  ypDot += (mouseY - ypDot) / 55;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 10);


setInterval(function () {
waitcounter=waitcounter+1;
dodgewaitcounter=dodgewaitcounter+1;
if (statecounter1 == 3) {
statecounter1=0;
}
if (statecounter2 == 6) {
statecounter2=0;
}
if (statecounter3 == 3) {
statecounter3=0;
}
if (statecounter4 == 1) {
statecounter4=0;
}
    if (dodge == 1) {
		
	  playSound('./dodge.wav');
	  dodge = 0;
}
}, 1);



setInterval(function () {
	
	  	var element = document.getElementById("cursorFollower");
    var dx = mouseX - xp;
  var dy = mouseY - yp;
  var theta = ((Math.atan2(dy, dx) * 180) / Math.PI) + 180;

	
if (mouseX < xpDot - 120 || mouseY < ypDot - 120 || mouseX > xpDot + 120 || mouseY > ypDot + 120) {
  
if (theta > 90 && theta < 270) {
  rotateThisFlip(element, theta);
}
if ((theta < 90 && theta > 0) || (theta < 360 && theta > 270) ) {
  rotateThis(element, theta);
}

if (state != 2) {



if (waitcounter > sounddelay && statecounter2 == 0) {
	playSound('./fly.wav');
	waitcounter=0;
	statecounter2=statecounter2+1;
}
if (waitcounter > sounddelay && statecounter2 == 1) {
	playSound('./fly.wav');
	waitcounter=0;
	statecounter2=statecounter2+1;
}
if (waitcounter > sounddelay && statecounter2 == 2) {
	playSound('./howdareyou.wav');
	waitcounter=0;
	statecounter2=statecounter2+1;
}
if (waitcounter > sounddelay && statecounter2 == 3) {
	playSound('./fly.wav');
	waitcounter=0;
	statecounter2=statecounter2+1;
}
if (waitcounter > sounddelay && statecounter2 == 4) {
	playSound('./fly.wav');
	waitcounter=0;
	statecounter2=statecounter2+1;
}
if (waitcounter > sounddelay && statecounter2 == 5) {
	playSound('./damnit.wav');
	waitcounter=0;
	statecounter2=statecounter2+1;
}
state=2;
state1timer = 0;
}

// Change the background image
element.style.backgroundImage = "url('Vegeta2.png')"
} else if (mouseX < xpDot - 22 || mouseY < ypDot - 22 || mouseX > xpDot + 22 || mouseY > ypDot + 22) {
  

if (theta > 90 && theta < 270) {
  rotateThisFlip(element, theta);
  


}
if ((theta < 90 && theta > 0) || (theta < 360 && theta > 270) ) {
  rotateThis(element, theta);


}


state1timer = state1timer + 1;

if (state != 1) {



if (waitcounter > sounddelay && statecounter1 == 0) {
	playSound('./morelikeit.wav');
	waitcounter=0;
	statecounter1=statecounter1+1;
}
if (waitcounter > sounddelay && statecounter1 == 1) {
	playSound('./timeisup.wav');
	waitcounter=0;
	statecounter1=statecounter1+1;
}
if (waitcounter > sounddelay && statecounter1 == 2) {
	playSound('./suffer.wav');
	waitcounter=0;
	statecounter1=statecounter1+1;
}
state=1;
}

	
	//console.log(statecounter1);

// Change the background image
element.style.backgroundImage = "url('Vegeta1.png')"


}  else if (mouseX < xp - 0.005 || mouseY < yp - 0.005 || mouseX > xp + 0.005 || mouseY > yp + 0.005) {
	
	if (theta > 90 && theta < 270) {
  rotateThisFlip(element, theta);
  

  if (dodgewaitcounter > 12 && flipped == 0 && waitcounter > dodgedelay && state1timer < 88) {
	  dodge=1;
  dodgewaitcounter=0;
}
flipped = 1;
}
if ((theta < 90 && theta > 0) || (theta < 360 && theta > 270) ) {
  rotateThis(element, theta);

  if (dodgewaitcounter > 12 && flipped == 1 && waitcounter > dodgedelay && state1timer < 88) {
	  dodge=1;
  dodgewaitcounter=0;
}
flipped = 0;
}
state1timer = 0;	
	
	

}   else  {
	
if (state4delay > state4delaysetpoint) {
  
if (state != 4) {



if (waitcounter > sounddelay && statecounter4 == 0) {
	playSound('./over90k.wav');
	waitcounter=0;
	statecounter4=statecounter4+1;
}

state=4;
}



if (theta > 90 && theta < 270) {
  element.style.backgroundImage = "url('vegeta4.png')"
  rotateThisFlip(element, 180);
}
if ((theta < 90 && theta > 0) || (theta < 360 && theta > 270) ) {
  element.style.backgroundImage = "url('vegeta3.png')"
  rotateThis(element, 0);
}


// Change the background image
//element.style.backgroundImage = "url('Vegeta3.png')"
//rotateThis(element, 0);

state1timer = 0;
state4delay = 0;
}
state4delay = state4delay + 1;
} 
}, 5);




function rotateThis(element, nR) {
    var aR;
    rot = rot || 0; // if rot undefined or 0, make 0, else rot
    aR = rot % 360;
    if ( aR < 0 ) { aR += 360; }
    if ( aR < 180 && (nR > (aR + 180)) ) { rot -= 360; }
    if ( aR >= 180 && (nR <= (aR - 180)) ) { rot += 360; }
    rot += (nR - aR);
    element.style.transform = 'rotate( ' + rot + 'deg) scaleY(' + 1 + ')';
}
function rotateThisFlip(element, nR) {
    var aR;
    rot = rot || 0; // if rot undefined or 0, make 0, else rot
    aR = rot % 360;
    if ( aR < 0 ) { aR += 360; }
    if ( aR < 180 && (nR > (aR + 180)) ) { rot -= 360; }
    if ( aR >= 180 && (nR <= (aR - 180)) ) { rot += 360; }
    rot += (nR - aR);
    element.style.transform = 'rotate( ' + rot + 'deg) scaleY(' + -1 + ')';
}
 
 
 function playSound(soundpass) {
var audio = new Audio(soundpass);
audio.play();
}
 

//function playAudio() { 
//  x.play(); 
//} 

//function pauseAudio() { 
 // x.pause(); 
