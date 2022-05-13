status = "";
input_text = "";
objects = [];
function setup(){
    canvas = createCanvas(300,290);
    canvas.position(480,250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("model_loaded");
    status = true;
}
function draw(){
    image(video, 0,0,300,290);`1`
    if(status !="")
    object.detector.detect(video,gotResults);
    for(i = 0; i < objects.length;i++){
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        console.log(objects.length);
        fill('#800080');
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%",objects[i].y + 15);
        noFill();
        stroke('#800080');
        rect(objects[i].x, objects[i].y, objects[i].width, objecta[i].height);
        if(objects[i].label == input_text){
            video.stop;
            object_detector.detect(gotResults);
            document.getElementById("object_found").innerHTML = input_text+"found";
            var synth = window.speechSynthesis;
            var utterThis = new SpeechSynthesisUtterance(input_text + "found");
            synth.speak;
        }
        else{
            document.getElementById("object_found").innerHTML = input_text + "not found";
        }
    }
}