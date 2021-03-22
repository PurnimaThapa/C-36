class Form {
    constructor(){}

    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)
        var input = createInput("")
        var button=createButton("Play")

        input.position(100,500)
        button.position(255,500)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            var greeting = createElement('h3')
            greeting.html("Hello " + name + " welcome to the game")
            greeting.position(15,450)
        })
    }
}