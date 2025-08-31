function setup(){
    createCanvass(600, 400);
    background(220);
}
function draw(){
    background(220);
    if (mousepresses()){
        circle(mouseX, mouseY, 200);
        circle.gravity('dynamic')
    }
}
