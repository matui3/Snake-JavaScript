
let snakeWidth = 20;
// develop snake class // initialize position
class Snake {
    constructor({ position, velocity }) {
        this.position = position;
        this.width = 20;
        this.height = 20;
        this.velocity = velocity;
        this.snakeBody = []
    }

    // initialize body
    draw() {
        ctx.fillStyle = 'green'
        this.snakeBody[0] = { x: this.position.x, y: this.position.y}
        
    }

    update() {

        if (this.position.x < 0) {
            this.velocity.x = 0;
            this.position.x = 0;
        } else if (this.position.x > canvas.width - 20) {
            this.velocity.x = 0;
            this.position.x = canvas.width - 20;
        } else if (this.position.y < 0) {
            this.velocity.y = 0;
            this.position.y = 0;
        } else if (this.position.y > canvas.height - 20) {
            this.velocity.y = 0;
            this.position.y = canvas.height - 20;
        }
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            this.snakeBody[i] = this.snakeBody[i - 1];
        }
        this.draw()
        this.position.x += this.velocity.x * 20;
        this.position.y += this.velocity.y * 20;
        this.snakeBody[0] = { x: this.position.x, y: this.position.y }
        
        for (let i = 0; i < this.snakeBody.length; i++) {
            ctx.fillRect(this.snakeBody[i].x, this.snakeBody[i].y, 20, 20)
        }
    }
}

class Apple {
    constructor({ position }) {
        this.position = position;
        this.width = 20;
        this.height = 20;
        this.eaten = false;
    }

    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, 20, 20)

    }

    update() {
        if (this.eaten) {
            ctx.fillStyle = 'black'
            this.position.x = Math.floor(Math.random() * 20) * 40;
            this.position.y = Math.floor(Math.random() * 20) * 40
            ctx.fillRect(this.position.x, this.position.y, 20, 20)
            this.eaten = false
        } else {
            this.draw()
        }
    }

    clearApple() {
        this.eaten = true;
    }
}

class Game {
    constructor() {
        this.timer = 0;
        this.timerId;
        this.gameOver = false;
    }

    clock() {
        if (this.timer = 0) {
            this.timer++;
            this.timerId = setTimeout(timer, 1000)
        }
    }

    gameEnds() {

        if (snake.position.x < 0 || snake.position.x >= canvas.width) {
            clearTimeout(this.timerId)
            this.gameOver = true;
            return true
        }

        if (snake.position.y < 0 || snake.position.y >= canvas.height) {
            clearTimeout(this.timerId)
            this.gameOver = true;
            return true;
        }
        // console.log("Head: ", snake.snakeBody[0].x)
        for (let i = 1; i < snake.snakeBody.length; i++) {
            // console.log("Body: ", snake.snakeBody[i].x)
            
            if (snake.snakeBody[0].x == snake.snakeBody[i].x && snake.snakeBody[0].y == snake.snakeBody[i].y) {
                clearTimeout(this.timerId)
                this.gameOver = true;
                return true;
            }
        }
        // check if snake eats itself


    }
}