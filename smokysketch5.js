

var bg;

var logo;

var species;

var images = [];

function preload(){
    table = loadTable("data/Workbook2.csv", "header");
   for(var i=5; i <= 8; i++){
     images[i] = loadImage('photos/' + i + '.jpg');
     logo = loadImage('photos/smokylogo.jpg');
    }
}


var table;
function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = loadImage("photos/smokies.jpg");
    loadData();
  
}

function draw(){
    background(bg);
    image(logo, 10, 10, 300, 300);
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

