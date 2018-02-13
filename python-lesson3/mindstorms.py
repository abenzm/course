import turtle

def draw_art():
    window = turtle.Screen()
    window.bgcolor("red")

    brad = turtle.Turtle()
    brad.shape("turtle")
    brad.color("blue")
    brad.speed(20)
    #brad.begin_fill()
    for i in range(1, 37):
        brad.right(10)
        for j in range(1, 5):
            brad.forward(50)
            brad.right(45)
            brad.forward(50)
            brad.right(135)
            brad.forward(50)
            brad.right(45)
            brad.forward(50)
    #brad.end_fill()
    brad.goto(0,-200)
    
    #nie = turtle.Turtle()
    #nie.shape("arrow")
    #nie.color("blue")
    #nie.circle(50)


    window.exitonclick()

draw_art()
