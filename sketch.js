var bg, snakeGroup, player, carrot, edges, o1, o2, o3, o4, o4, o6, o7, o8, o9, o10, o11, o12, o13,snakeimg,playerimg,carrotimg,bgimg
function preload(){
bgimg=loadImage('forest.png')
playerimg=loadImage('rabbit.png')
carrotimg=loadImage('carrot.png')
snakeimg=loadImage('snake.png')
}
function setup() {
  createCanvas(600, 600);
  bg=createSprite(300,300,600,600)
  bg.addImage(bgimg)
  carrot = createSprite(570, 40, 50, 50)
  carrot.addImage(carrotimg)
  carrot.scale=0.3
  carrot.shapeColor = 'red'
  edges = createEdgeSprites()
  o1 = createSprite(70, 200, 70, 10)
  o2 = createSprite(220, 200, 70, 10)
  o3 = createSprite(370, 200, 70, 10)
  o4 = createSprite(520, 200, 70, 10)
  o5 = createSprite(0, 270, 70, 10)
  o6 = createSprite(150, 270, 70, 10)
  o7 = createSprite(300, 270, 70, 10)
  o8 = createSprite(450, 270, 70, 10)
  o9 = createSprite(600, 270, 70, 10)
  o10 = createSprite(70, 340, 70, 10)
  o11 = createSprite(220, 340, 70, 10)
  o12 = createSprite(370, 340, 70, 10)
  o13 = createSprite(520, 340, 70, 10)
  o1.shapeColor = 'black'
  o2.shapeColor = 'black'
  o3.shapeColor = 'black'
  o4.shapeColor = 'black'
  o5.shapeColor = 'black'
  o6.shapeColor = 'black'
  o7.shapeColor = 'black'
  o8.shapeColor = 'black'
  o9.shapeColor = 'black'
  o10.shapeColor = 'black'
  o11.shapeColor = 'black'
  o12.shapeColor = 'black'
  o13.shapeColor = 'black'
  snakeGroup = new Group()
  player = createSprite(300, 570, 32, 32)
  player.addImage(playerimg)
  player.scale=0.4
  player.shapeColor = 'white'
}
function draw() {
  background('green')
  drawSprites()
  player.bounceOff(edges[0])
  if (player.isTouching(carrot)) {
    textSize(32);
    fill('darkblue');
    text('Touched the Carrot!!!', 50, 50);
  } else{
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])
  if (keyDown("left")) {
    player.x = player.x - 7
  }
  if (keyDown("right")) {
    player.x = player.x + 7
  }
  if (keyDown("up")) {
    player.y = player.y - 7
  }
  if (keyDown("down")) {
    player.y = player.y + 7
  }
  if (player.isTouching(o1) || player.isTouching(o2) || player.isTouching(o3) || player.isTouching(o4) || player.isTouching(o5) || player.isTouching(o6) || player.isTouching(o7) || player.isTouching(o8) || player.isTouching(o9) || player.isTouching(o10) || player.isTouching(o11) || player.isTouching(o12) || player.isTouching(o13)) {
    player.x = 30
    player.y = 570
  }
  snakes()
  for (var i = 0; i < snakeGroup.length; i++) {
    var temp = snakeGroup.get(i);
    if (player.isTouching(temp)) {
      temp.destroy();
      temp = null;
      player.x = 300
      player.y = 570
    }
  }
}
}
function snakes() {
  if (frameCount % 30 == 0) {
    var snake = createSprite(0, random(70, 560), random(40, 80), 5)
    snake.addImage(snakeimg)
    snake.scale=0.1 
    snakeGroup.add(snake)
    snake.shapeColor = 'yellow'
    snake.velocityX = random(5, 10)
  }
}