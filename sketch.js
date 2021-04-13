
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;

function preload () {

    getTime ( );

}

function setup () {

    var canvas = createCanvas(1200,850);

    engine = Engine.create();
    world = engine.world;

}

function draw () {

    // Condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here

}

async function getTime () {

    // Code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    // Changing the data in JSON format
    var responseJSON = await response.json ();

    // Code to change the variable into datetime
    var datetime = responseJSON.datetime;

    // Code to slice the datetime for receiving only the hour
    var hour = datetime.slice (11,13);

    // Conditions to change the background images from sunrise to sunset

    if (hour>=4 && hour<6) { 
        bg="sunrise1.png"; 
    }

    else if (hour>=6 && hour<8) {
        bg="sunrise2.png"; 
    }

    else if (hour>=8 && hour<10) { 
        bg="sunrise3.png"; 
    }

    else if (hour>=10 && hour<12) {
        bg="sunrise4.png";
    }

    else if (hour>=12 && hour<14) {
        bg="sunrise5.png"; 
    }

    else if (hour>=14 && hour<16) { 
        bg="sunrise6.png"; 
    }

    else if (hour>=16 && hour<18) { 
        bg="sunset7.png"; 
    }

    else if (hour>=18 && hour<20) { 
        bg="sunset8.png"; 
    }

    else if (hour>=20 && hour<22) { 
        bg="sunset9.png"; 
    }

    else if (hour>=22 && hour<0) {
        bg="sunset10.png"; 
    }

    else if (hour>=0 && hour<2) { 
        bg="sunset11.png"; 
    }

    else if (hour>=2 && hour<4) {
        bg="sunset12.png";
    }

    // Loading the image in backgroundImg variable here
    backgroundImg = loadImage (bg);

}
