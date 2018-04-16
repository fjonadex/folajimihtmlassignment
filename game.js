var timer = 60;
var score = 0;

function setup() {
 // createCanvas(400, 400);
}

function draw() {
  background(66, 244, 244);
  ellipse(200,200,50,50);
  push();
  textSize(13.5);
 	fill("red");
  text("Press 'F' and 'J' to gain points", 10, 160);
  pop();
  push()
  textSize(13.5);
 	fill("red");
  text("TRY TO GET 700 POINTS BEFORE THE CLOCK RUNS OUT!", 10, 140);
  pop()
  textSize(30);
  fill("purple");
  text(timer, 10, 30);
  
  textSize(30);
  fill("orange");
  text(score, 350, 400);

  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }

  if (timer == 0){
  	background('black');
    textSize(20);
 	 	fill("red");
    text("Your score was...", 100, 160);
  	text(score, 100, 180);
    text("You didn't beat the game, so try again lol :P", 10,220);
 }
    if (timer == 0 && score >= 700){
  	background('black');
    textSize(20);
 	 	fill("red");
    text("Oh shit! You Actually Beat The Game!", 40, 180);
    text("Congrats!", 40,200);
    text("Now try to beat it again lol :P", 40,220);
  	text(score, 100, 260);
 }
}

function keyTyped(){
	if (key == 'f'){
    fill("purple");
    ellipse(200,200,50,50);
  	score++;
  }	
  if (key == 'j'){
  	fill("purple");
    ellipse(200,200,50,50);
    score++;
  }
}