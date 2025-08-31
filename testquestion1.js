function setup(){
    createCanvass(600, 400);
    background(220);
    world.gravity.Y = 10
    new Sprite = ball;
    ball.x = mouseX;
    ball.y = mouseY;
    ball.gravity.Y = ('dynamic');
}
function draw(){
    if (mousepresses()){
        ball(mouseX, mouseY);
    }
}
