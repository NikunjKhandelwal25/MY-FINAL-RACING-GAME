class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.restartbutton=createButton("restart Only for NIKUNJ");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);
    this.restartbutton.position(1200,10);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      myplayerCount+=1;
      player.index = myplayerCount;
      player.update();
      player.updateCount(myplayerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

    this.restartbutton.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref('/').child("players").remove();
      Player.updaterank(0);
    })


  }
}
