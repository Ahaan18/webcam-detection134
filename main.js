status1 = "";
objects = [];
x = "";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    x = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("cocossd has loaded!");
    status1 = true;
}
function detectedObject(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}
function draw(){
    image(video, 0, 0, 640, 420);
    if(status1 != ""){
        x.detect(video, detectedObject);
        r = random(255);
        g = random(255);
        b = random(255);
for(var i = 0; i < objects.length; i++){
    document.getElementById('objectdetected').innerHTML = "Number of objects detected: "+objects.length;
    document.getElementById('status').innerHTML = "Status: Object Detected"
    percent = floor(objects[i].confidence * 100);
    fill(r, g, b);
    text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 15);
    noFill();
    stroke(r, g, b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}