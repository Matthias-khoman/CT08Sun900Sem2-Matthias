function setup(){
    createCanvass(600, 400);
    background(220);
}
function draw(){
    new Sprite = ball;
    ball.gravity.Y = ('dynamic');
    if (mousepresses()){
        ball(mouseX, mouseY);
    }
}
