/**
 * Created by Nader on 4/1/2015.
 */

var snake = (function () {

    var queue = {
            arr: [],
            length: 0,
            enqueue: function (obj) {
                this.arr.unshift(obj);

                if (this.arr.length > this.length) {
                    this.arr.pop();
                }
            },
            get: function (i) {
                return this.arr[i];
            }
        }
        , snake = {
            x: 30
            , y: 30
            , xdir: 1
            , ydir: 0
            , speed: 0.6
            , length: 20
            , blockSize: 2
        };


    function init() {

        queue.length = snake.length;

        for (var i = 0; i < snake.length; i++) {
            queue.enqueue({x: snake.x, y: snake.y});
        }

        window.addEventListener('keydown', keyDown, false);

        draw();
    }

    function keyDown(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 38: // up
                snake.xdir = 0;
                snake.ydir = -1;
                break;
            case 40:
                snake.xdir = 0;
                snake.ydir = 1;
                break;
            case 37: // left
                snake.xdir = -1;
                snake.ydir = 0;
                break;
            case 39: // right
                snake.xdir = 1;
                snake.ydir = 0;
                break;
        }
    }

    function draw() {

        canvas.clear();

        if (snake.xdir !== 0) {
            if (snake.x > 100) {
                snake.x = 0;
            }
            else if (snake.x < 0) {
                snake.x = 100;
            }
            else {
                snake.x += snake.xdir * snake.speed;
            }
        }
        else if (snake.ydir !== 0) {
            if (snake.y > 100) {
                snake.y = 0;
            }
            else if (snake.y < 0) {
                snake.y = 100;
            }
            else {
                snake.y += snake.ydir * snake.speed;
            }
        }

        queue.enqueue({x: snake.x, y: snake.y});

        for (var i = 0; i < snake.length; i++) {
            var point = queue.get(i);
            canvas.rectPercent(point.x, point.y, snake.blockSize, snake.blockSize);
        }

        window.requestAnimationFrame(draw);
    }

    return {
        init: init
    }
})();