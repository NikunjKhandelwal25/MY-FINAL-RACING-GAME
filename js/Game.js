class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        myplayerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car1.addImage(car1img);

    car2=createSprite(300,200);
    car2.addImage(car2img);

    car3=createSprite(500,200);
    car3.addImage(car3img);
    
    car4=createSprite(700,200);
    car4.addImage(car4img);
    
    cars=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    textSize(30);

    text("Game Start", 120, 100)

    Player.getPlayerInfo();
   player.getrank();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
        fill("red")
        ellipse(x,y,100,80);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        
      }

    }
    

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>4000){
      gameState=2

      player.rank+=1;
      Player.updaterank(player.rank);
    }
    drawSprites();
  }

  end(){
    var ranking = createElement('h2');
    ranking.html("Game has Ended and You are:"+player.rank);
    ranking.position(displayWidth/2,0)
    ranking.style("color","Lightblue")
  }
}
