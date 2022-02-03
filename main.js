function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img = "";
status ="";
objects = [];


function preload(){
    img = loadImage('baby sleeping.png');
  }
  
  
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  
  
  function draw() {
    if (status != undefined) {
          image(img, 0, 0, 640, 420);
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Baby Found";
        noStroke();
        fill(0, 255, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(0, 255, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
  }