class Game {
    constructor(){}

    getstate(){
        var gameStateRef = database.ref('gamestate')
        gameStateRef.on("value",function(data){
        gamestate = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gamestate: state
        }
        )
    }

    start(){
    if(gamestate===0){
        form=new Form ()
        form.display()
    }
}
}