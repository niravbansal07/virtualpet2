var dog, happyDog, database, foodS, foodStock;
var foodStock,lastFed;

function preload()
{
  this.image = loadImage("sprites/Dog.png");
  this.image = loadImage("sprites/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  Dog=createSprite();
  Dog.addImage(Dog.png);
  Dog.addImage(happyDog.png);
}


function draw() {  

  drawSprites();
  //add styles here

  if(KeyWentDown(UP_ARROW )){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

}

//Function to read values from DB 
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

