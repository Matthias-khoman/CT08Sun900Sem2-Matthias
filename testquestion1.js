function setup(){
    createCanvass(600, 400);
    background(220);
    new Sprite = ball;
    ball.gravity.Y = ('dynamic');
}
function draw(){
    if (mousepresses()){
        ball(mouseX, mouseY);
    }
}
