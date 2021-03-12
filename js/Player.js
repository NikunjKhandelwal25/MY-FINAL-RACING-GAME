class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      myplayerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      'playerCount': count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

getrank(){
  var getrankref=database.ref("rank");
  getrankref.on('value',(date)=>{
   this.rank=date.val();
  })
}
static updaterank(rank){
database.ref("/").update({
"rank":rank
});
}

}
