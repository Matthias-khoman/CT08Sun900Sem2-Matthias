function setup(){
    createCanvass(600, 400);
    background(220);
    circle(mouseX, mouseY, 200);
    circle.collider('dynamic');
}
function draw(){
    background(220);
    if (mousepresses()){
        circle()
    }
}
