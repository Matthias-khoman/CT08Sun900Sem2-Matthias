function setup(){
    createCanvass(600, 400);
    background(220);
    new Sprite = circle(mouseX, mouseY, 200);
    circle.gravity.Y = ('dynamic');
}
function draw(){
    background(220);
    if (mousepresses()){
        circle()
    }
}
