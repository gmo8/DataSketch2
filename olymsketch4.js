
var bg;

var logo;

var species;

var images = [];

function preload(){
    table = loadTable("data/Workbook2.csv", "header");
   for(var i=13; i <= 16; i++){
     images[i] = loadImage('photos/' + i + '.jpg');
     logo = loadImage('photos/olymlogo.jpg');
    }
}


var table;
function setup(){
  createCanvas(windowWidth,windowHeight);
    bg = loadImage("photos/olym.jpg");
    loadData();
}

function draw(){

    background(bg);
    image(logo, 5, 2, 300, 300);
    for (var i = 0; i < species.length; i++) {
        species[i].display();
        species[i].rollover(mouseX, mouseY);
      }
}

function loadData(){

    species = [];

    for (var i = 0; i < table.getRowCount(); i++) {
        var row = table.getRow(i);
        var animal = row.get("species");
        var fact = row.get("pop");
        species[i] = new Species(images[i], random(50,900), random(50,900), 200, fact);
  }
}

class Species {
    constructor(photo, x, y, diameter, s) {
      this.x = Number(x);
      this.y = Number(y);
      this.diameter = Number(diameter);
      this.name = s;
      this.over = false;
      this.photo = photo; 
    }
      rollover(px, py) {
        var d = dist(px, py, this.x, this.y);
        if (d < this.diameter) {
          this.over = true;
        } else {
          this.over = false;
        }
    }

display() {
    stroke(5);
    strokeWeight(5);
    image(this.photo, this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      text(this.name, this.x, this.y + this.diameter/2 + 20);
      
    }
  }
}