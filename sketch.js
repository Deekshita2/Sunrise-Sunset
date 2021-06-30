const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var sunrise1, sunrise2, sunrise3, sunrsise4, sunrise5, sunrise6;
var sunset1, sunset2, sunset3, sunset4, sunset5, sunset6, sunset7, sunset8, sunset9, sunset10, sunset11, sunset12;

function preload() {
    // create getBackgroundImg( ) here

  /*  sunrise1 = loadImage("sunrise1");
    sunrise2 = loadImage("sunrise2");
    sunrise3 = loadImage("sunrise3");
    sunrise4 = loadImage("sunrise4");
    sunrise5 = loadImage("sunrise5");
    sunrise6 = loadImage("sunrise6");

    sunset1 = loadImage("sunset1");
    sunset2 = loadImage("sunset2");
    sunset3 = loadImage("sunset3");
    sunset4 = loadImage("sunset4");
    sunset5 = loadImage("sunset5");
    sunset6 = loadImage("sunset6");
    sunset7 = loadImage("sunset7");
    sunset8 = loadImage("sunset8");
    sunset9 = loadImage("sunset9");
    sunset10 = loadImage("sunset10");
    sunset11 = loadImage("sunset11");
    sunset12 = loadImage("sunset12");*/
  




}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
   

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format

    var responseJson = await response.json();

    // write code slice the datetime

    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);

 


    // add conditions to change the background images from sunrise to sunset

        if(hour >= 04 && hour < 06){
            bg = "sunrise1";
        }
       else if(hour >= 06 && hour < 08){
           bg = "sunrise2";
       }
      else if(hour >= 08 && hour < 10 ){
           bg = "sunrise3";
      }
       else if(hour >= 10 && hour < 12 ){
           bg = "sunrise4";
       }
       else if(hour >= 12  && hour < 15 ){
        bg = "sunrise5";
    }
    else if(hour >= 15  && hour < 18){
        bg = "sunrise6";
    }
    else if(hour >= 18  && hour < 20  ){
        bg = "sunset7";
    }
    else if(hour >= 20 && hour < 21 ){
        bg = "sunset8";
    }
    else if(hour >= 21 && hour < 23){
        bg = "sunset9";
    }
    else if(hour >= 23 && hour < 25 ){
        bg = "sunset10";
    }
    else if(hour >= 25 && hour < 27){
        bg = "sunset11";
    }
    else if(hour >= 27   && hour <= 29){
        bg = "sunset12";
    }
   
    


    //load the image in backgroundImg variable here

    backgroundImage = loadImage(bg);

}
