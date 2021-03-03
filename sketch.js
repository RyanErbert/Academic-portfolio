/*  This script was created for the ryanerbert.com home page and is for personal use only.
    All rights reserved.

      To add new criteria, add:
      ICON
      X&Y ICON location for each LABEL type
      RGB color info
      Hoverbox text
      "arrow" location
      descriptive text


*/


//********************************************************
//Global Variables
//********************************************************



var touched = 0;

var coord = [];
var spacer = 65;
var canvas;
var twitter, tumblr, linkedin;

var t = 0;
var u = 0;

var test; //CHANGE THIS TO THE CHUNK

//Label Class
var label = [];
var labelX = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 2, 4];
var labelY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var labelOn = [];
var labelAlpha = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
var labelChron = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var labelType = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];

var labelOpacity = [];

//Icon Class
var icon = [];
var iconButton = [];
var img = [];
var active = false;
var imgOpacity = [];

var anchorX = [];
var anchorY = [];

var url = [];
var urlNum;

url[0] = 'http://ryanerbert.com/viewport';
url[1] = "http://ryanerbert.com/aurora";
url[2] = "http://ryanerbert.com/bangkok";
url[3] = "http://ryanerbert.com/eggfab";
url[4] = "http://ryanerbert.com/portl";
url[5] = "http://ryanerbert.com/poprocks";
url[6] = "http://ryanerbert.com/hudson";
url[7] = "http://ryanerbert.com/portfolio";
url[8] = "http://ryanerbert.com/web";


//Color variables
var iconColor = [];
var colorSpeed = 2;

var r = 0;
var g = 0;
var b = 0;

var rAnchor;
var gAnchor;
var bAnchor;

iconColor[0] = [60, 184, 134];
iconColor[1] = [158, 41, 105];
iconColor[2] = [86, 199, 216];
iconColor[3] = [190, 215, 48];
iconColor[4] = [237, 18, 95];
iconColor[5] = [254, 209, 16];
iconColor[6] = [25, 16, 71];
iconColor[7] = [100, 100, 100];
iconColor[8] = [0, 130, 255];

//Button locations
var xPosAlpha = [7, 1, 2, 3, 6, 6, 5, 4, 8];
var xPosChron = [1, 2, 2, 2, 2, 3, 3, 4, 4];
var xPosType = [1, 3, 1, 3, 1, 3, 1, 2, 4];

var yPosAlpha = [1, 1, 1, 1, 1, 2, 1, 1, 1];
var yPosChron = [1, 1, 2, 3, 4, 1, 2, 1, 2];
var yPosType = [1, 1, 2, 2, 3, 3, 4, 1, 1];

//foci location & size
var fociX = [609, 483, 280, 821, 248, 455, 659, 237, 237];
var fociY = [430, 186, 353, 212, 223, 356, 196, 127, 127];
var fociSize = [1.5, .8, 1, 1, 1, .8, 2.5, 1, 1];

//Buttons
var buttonAlpha;
var buttonChron;
var buttonType;

//Hover Behavior
var hoverText = ["VIEWPORT: MARITIME MUSEUM", "AURORA: KINETIC SCULPTURE", "BANGKOK: DEMOCRATIC HUB", "EGGFAB: MATERIALS STUDY", "PORTL: INTERACTIVE HOTEL EXPERIENCE", "POPROCKS: PARAMETRIC JEWELRY", "HUDSON: CENTER FOR CREATIVES", "FOLIO", "WEBSITE"];

//********************************************************
//Preload
//********************************************************
function preload() {

  pixelFont = loadFont("m3x6.ttf");

  img[0] = loadImage('images/viewport.png');
  img[1] = loadImage('images/aurora.png');
  img[2] = loadImage('images/bangkok.png');
  img[3] = loadImage('images/eggfab.png');
  img[4] = loadImage('images/portl.png');
  img[5] = loadImage('images/poprocks.png');
  img[6] = loadImage('images/hudson.png');
  img[7] = loadImage('images/folio.png');
  img[8] = loadImage('images/web.png');

  label[0] = loadImage("images/label-2013.png");
  label[1] = loadImage("images/label-2014.png");
  label[2] = loadImage("images/label-2015.png");
  label[3] = loadImage("images/label-2016.png");
  label[4] = loadImage("images/label-a.png");
  label[5] = loadImage("images/label-b.png");
  label[6] = loadImage("images/label-e.png");
  label[7] = loadImage("images/label-f.png");
  label[8] = loadImage("images/label-h.png");
  label[9] = loadImage("images/label-p.png");
  label[10] = loadImage("images/label-v.png");
  label[11] = loadImage("images/label-w.png");
  label[12] = loadImage("images/label-arch.png");
  label[13] = loadImage("images/label-fab.png");
  label[14] = loadImage("images/label-illust.png");
  label[15] = loadImage("images/label-inter.png");
}

//********************************************************
//SETUP
//********************************************************

function setup() {

  //Create Canvas
  var cX = screen.width;
  var cY = screen.width;

  canvas = createCanvas(cX, cY);
  canvas.position(0, 0);
  canvas.style("z-index", "auto");

  frameRate(60);



  //icons
  for (var i = 0; i < img.length; i++) {
    anchorX[i] = (xPosAlpha[i] * spacer) + spacer * 3;
    anchorY[i] = (yPosAlpha[i] * spacer) + spacer;
    active[i] = 0;
    imgOpacity[i] = 255;
  }

  //labels
  for (var i = 0; i < label.length; i++) {
    labelOn[i] = labelAlpha[i];
  }

  //Button constructors
  buttonAlpha = createButton('Alphabetical')
  buttonAlpha.position(spacer, spacer * 2.5);
  buttonAlpha.mousePressed(switchAlpha);
  buttonAlpha.style('z-index', '2');
  buttonAlpha.class('organizer');

  buttonChron = createButton("Chronological")
  buttonChron.position(spacer, spacer * 3);
  buttonChron.mousePressed(switchChron);
  buttonChron.style('z-index', '3');
  buttonChron.class('organizer');

  buttonType = createButton("Type")
  buttonType.position(spacer, spacer * 3.5);
  buttonType.mousePressed(switchType);
  buttonType.style('z-index', '4');
  buttonType.class('organizer');

  //Icon constructor
  for (i = 0; i < img.length; i++) {
    icon[i] = createSprite((xPosAlpha[i] * spacer) + spacer * 3, (yPosAlpha[i] * spacer) + spacer, 50, 50)
    icon[i].setCollider("rectangle", 25, 25, 50, 50);
    icon[i].visible = false;
    icon[i].mouseActive = true;
    //
    // iconButton[i] = createButton('hi');
    // iconButton[i].position(icon[i].width,icon[i].height);


  }

  //Chunk Image
  test = createImg('hello.png');
  test.style('z-index', '1');
  test.style('display','block');
  test.style('margin-left','auto');
  test.style('margin-right','auto');
  test.class('chunk');
//  test.style('width','70%');

  test.style('max-width','1000px');
  test.style('padding-top', '275px');





  //Social Media links
  twitter = createDiv("<a href='https://twitter.com/McToady'><img src='images/twitter.png'/></a>");
  twitter.position(width - 100, 0.75 * spacer);

  tumblr = createDiv("<a href='http://cosmicnarratives.tumblr.com/'><img src='images/tumblr.png'/></a>");
  tumblr.position(width - 150, 0.75 * spacer);

  linkedin = createDiv("<a href='https://www.linkedin.com/pub/ryan-erbert/107/186/a63'><img src='images/linkedin.png'/></a>");
  linkedin.position(width - 200, 0.75 * spacer);

  var logo = createDiv("<a href='http://ryanerbert.com/about'><img src='images/logo.png'/></a>");
  logo.position(spacer, 0.75 * spacer);
}

//********************************************************
//DRAW
//********************************************************

function draw() {
  clear();

  var fociXnew = [];
  var fociYnew = [];

  //adjust foci Y locations for margin

  // for(var i=0; i<fociY.length; i++){
  //   fociY[i] = fociY[i] + 275;
  // }

  for(var q=0; q<fociX.length; q++){
    fociXnew[q] = (((windowWidth / 2) - (500)) + fociX[q]);
    fociYnew[q] = fociY[q] + 275;
    //fill('white');
    //ellipse(fociXnew[q],fociYnew[q],5,5);
  }


//show x & y location of mouse
  // text(`${mouseX},${mouseY}`,mouseX,mouseY);


  var hx = "#" + hex(r, 2) + hex(g, 2) + hex(b, 2);
  document.body.style.backgroundColor = hx;

//delet THIS
document.body.style.backgroundColor = 'black';





  // Draws the virtual point grid.
  //stroke(r + 30, g + 30, b + 30);
//for presentation
  stroke(30, 30,30);




  for (var x = 0; x < windowWidth; x += spacer) {
    coord[x] = [];
    for (var y = 0; y < windowHeight; y += spacer) {
      coord[x][y] = point(x, y);
    }
  }

  //Icon behavior
  active = false;

  for (i = 0; i < img.length; i++) {
    var s = icon[i]; //this simplifies icon[i], handy trick.

    if (s.mouseIsOver) {
      active = true;
    }



    //url
    if (s.mouseIsPressed) {
      window.location.href = url[i];
    }

    //movement
    s.velocity.x = (anchorX[i] - icon[i].position.x) * 0.1;
    s.velocity.y = (anchorY[i] - s.position.y) * 0.1;
  }

  drawSprites();

  //Dimming mechanism
  for (var i = 0; i < img.length; i++) {

    if (active === true && imgOpacity[i] > 50) { //if active, lower opacity
      imgOpacity[i] = imgOpacity[i] - 10;
    }

    if (active === false && imgOpacity[i] < 255) {
      imgOpacity[i] = imgOpacity[i] + 10;
    }

    if (active === false) {
      rAnchor = 15;
      gAnchor = 15;
      bAnchor = 15;

      t = 0;
    }

    if (icon[i].mouseIsOver) {

      textFont(pixelFont);
      textSize(32);
      fill(255)
      noStroke;
      text(hoverText[i], mouseX + (0.5 * spacer), mouseY + 8);

      imgOpacity[i] = 255;

      // Background Color driver
      rAnchor = iconColor[i][0];
      gAnchor = iconColor[i][1];
      bAnchor = iconColor[i][2];
    }

    if (r > rAnchor)
      r = r - colorSpeed;

    if (r < rAnchor)
      r = r + colorSpeed;

    if (g > gAnchor)
      g = g - colorSpeed;

    if (g < gAnchor)
      g = g + colorSpeed;

    if (b > bAnchor)
      b = b - colorSpeed;

    if (b < bAnchor)
      b = b + colorSpeed;

    if (r > 255) {
      r = 255;
    }
    if (g > 255) {
      g = 255;
    }
    if (b > 255) {
      b = 255;
    }


    tint(255, imgOpacity[i]);

    image(img[i], icon[i].position.x, icon[i].position.y);
  }

  //Label Behavior
  for (i = 0; i < label.length; i++) {
    if (labelOn[i] === 1) {
      tint(255, 255);
      image(label[i], (labelX[i] * spacer) + spacer * 3, (labelY[i] * spacer) + 1.5 * spacer);
    }
  }

  if (active === true) {
    t++;
    if (t > 30) {
      //insert something here
    }
  }

  linkedin.position(windowWidth - 200, 0.75 * spacer);
  twitter.position(windowWidth - 100, 0.75 * spacer);
  tumblr.position(windowWidth - 150, 0.75 * spacer);


  //begin fuckery
  for (var i = 0; i < img.length; i++) {
    if  (icon[i].mouseIsOver) {

  var pulseSpeed = 0.06;

      stroke(255, 255, 255, (154 * sin(pulseSpeed * -u)) + 101);
      strokeWeight(1.5);
      fill(255, 255, 255, 0);
      ellipse(fociXnew[i], fociYnew[i], (30 * sin(pulseSpeed * u)) + (200 * fociSize[i]), (30 * sin(pulseSpeed * u)) + (200 * fociSize[i]));
      stroke(255, 255, 255, (154 * sin(pulseSpeed * u)) + 101);
      ellipse(fociXnew[i], fociYnew[i], (30 * sin(pulseSpeed * -u)) + (200 * fociSize[i]), (30 * sin(pulseSpeed * -u)) + (200 * fociSize[i]));

      u++;
    }

    if (labelOn[i] === false) {
      u = 0;
    }
  }

}

//********************************************************
//FUNCTIONS
//********************************************************




function switchAlpha() {
  for (i = 0; i < img.length; i++) {
    anchorX[i] = (xPosAlpha[i] * spacer) + spacer * 3;
    anchorY[i] = (yPosAlpha[i] * spacer) + spacer;
  }

  for (i = 0; i < label.length; i++) {
    labelOn[i] = labelAlpha[i];
  }
}

function switchChron() {
  for (i = 0; i < img.length; i++) {
    anchorX[i] = (xPosChron[i] * spacer) + spacer * 3;
    anchorY[i] = (yPosChron[i] * spacer) + spacer;
  }

  for (i = 0; i < label.length; i++) {
    labelOn[i] = labelChron[i];
  }
}


function switchType() {
  for (i = 0; i < img.length; i++) {
    anchorX[i] = (xPosType[i] * spacer) + spacer * 3;
    anchorY[i] = (yPosType[i] * spacer) + spacer;
  }

  for (i = 0; i < label.length; i++) {
    labelOn[i] = labelType[i];
  }
}
