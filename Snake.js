const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800;
canvas.height = 800;

ctx.fillStyle = "black"

ctx.fillRect(0, 0, canvas.width, canvas.height)

const snake = new Snake({
    position: {
        x: 200,
        y: 200
    }, velocity: {
        x: 0,
        y: 0
    }
})

snake.draw()

const game = new Game();

const apple = new Apple({
    position: {
        x: Math.floor(Math.random() * 20) * 40,
        y: Math.floor(Math.random() * 20) * 40
    }
})

function animate() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    apple.draw()
    snake.update();
    game.clock()

    if (rectangularCollisions({
        rectangle1: snake,
        rectangle2: apple})) {
            let body = snake.snakeBody
            apple.clearApple();
            snake.snakeBody.push({x: body[body.length-1].x, y: body[body.length-1].y})
            console.log("Apple added: ", body[body.length-1].x)
            apple.update();
        }
    
    if (game.gameEnds()) {
        clearTimeout(animate)
    }

}

setInterval(animate, 100)


animate()


window.addEventListener('keydown', (event) => {

    switch (event.key) {
        case 'ArrowUp':
            if (snake.velocity.y != 1 && !game.gameOver) {
                snake.velocity.y = -1
                snake.velocity.x = 0
            }
            break;
        case 'ArrowDown':
            if (snake.velocity.y != -1 && !game.gameOver) {
                snake.velocity.y = 1
                snake.velocity.x = 0
            }
            break;
        case 'ArrowLeft':
            if (snake.velocity.x != 1 && !game.gameOver) {
                snake.velocity.x = -1
                snake.velocity.y = 0
            }
            break;
        case 'ArrowRight':
            if (snake.velocity.x != -1 && !game.gameOver) {
                snake.velocity.x = 1
                snake.velocity.y = 0
            }
            break;
    }
})