(function() {

    var canvas = document.getElementById('canvas')
        , ctx = canvas.getContext('2d')
        , queue = []
        , snake = {
            x: 30
            , y: 30
            , direction: 'right'
            , speed: 0.6
            , size: 5
            , blockSize: 2
        };

    init();

    function init() {
        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('keydown', keyDown, false);
        resizeCanvas();
        queue.push({});
    }

    function resizeCanvas() {
        canvas.height = window.innerHeight * 0.95;
        canvas.width =  Math.min(canvas.height * 1.5, document.body.clientWidth);
        draw();
    }

    function keyDown(e) {
        e = e || window.event;
        switch(e.keyCode) {
            case 38:
                snake.direction = 'up';
            break;
            case 40:
            snake.direction = 'down';
            break;
            case 37:
                snake.direction = 'left';
            break;
            case 39:
                snake.direction = 'right';
            break;

        }
    }

    function rectPercent(x, y, width, height) {
        ctx.beginPath();
        ctx.rect(x*canvas.width/100, y*canvas.height/100, width*canvas.width/100, height*canvas.height/100);
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        var xdir = 0
            , ydir = 0;

        switch(snake.direction) {
            case 'left':
                xdir = -1;
                ydir = 0;
                break;
            case 'right':
                xdir = 1;
                ydir = 0;
                break;
            case 'up':
                xdir = 0;
                ydir = -1;
                break;
            case 'down':
                xdir = 0;
                ydir = 1;
                break;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < snake.size; i++) {
            rectPercent(snake.x-(i*xdir*snake.blockSize), snake.y-(i*ydir*snake.blockSize), snake.blockSize, snake.blockSize);
        }

        if (xdir !== 0) {
            if (snake.x < 100 + snake.size * snake.blockSize) {
                snake.x += xdir * snake.speed;
            }
            else {
                snake.x = 0;
            }
        }
        else if (ydir !== 0) {
            if (snake.y < 100 + snake.size * snake.blockSize) {
                snake.y += ydir * snake.speed;
            }
            else {
                snake.y = 0;
            }
        }

        window.requestAnimationFrame(draw);
    }
})();