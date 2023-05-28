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
    apple.draw();
    snake.update();
    game.clock();

    if (rectangularCollisions({
        rectangle1: snake,
        rectangle2: apple
    })) {
        apple.clearApple();
        snake.snakeBody.push(apple.position)     
        apple.update();
        snake.update();
    }
    
    if (game.gameEnds()) {
        clearInterval(timer)
    }
}

var timer = setInterval(animate, 100)

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