function setup(){
    createCanvass(600, 400);
    background(220);
}
function draw(){
    background(220);
    new Sprite = ball;
    ball.gravity.Y = ('dynamic');
    if (mousepresses()){
        ball(mouseX);
    }
}
