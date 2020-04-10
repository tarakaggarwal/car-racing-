class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("game start",120,100)
    Player.getPlayerInfo();
    if(allPlayer==defined){
      var display_position=130
      for (var plr in allPlayer){
if (plr=="player"+player.index){
fill("red")
}
      }
    }
  }
}
