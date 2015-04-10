/**
 * Created by Nader on 4/1/2015.
 */

var snake = (function () {

    var score = 0
        , queue = {
            arr: []
            , maxLength: 0
            , get length() {
                return this.arr.length;
            }
            , enqueue: function (obj) {
                this.arr.unshift(obj);

                if (this.arr.length > this.maxLength) {
                    this.arr.pop();
                }
            }
            , get: function (i) {
                return this.arr[i];
            }
        }
        , snake = {
            location: {x: 30, y: 30}
            , direction: {x: 1, y: 0}
            , speed: 2
            , length: 10
            , blockSize: 2
        }
        , food = {
            location: {x: 0, y: 0}
            , blockSize: 2
        };

    /**
     * Init
     */
    function init() {
        queue.maxLength = snake.length;
        input.bindEvents(snake);
        placeFood();
        moveSnake();
        animate();
    }

    /**
     * Move snake
     */
    function moveSnake() {

        if (hasCollision()) {
            document.getElementById('score').innerHTML = "Game over! <br> Score: " + score.toString();
            return;
        }

        queue.enqueue(_.clone(snake.location));

        if (snake.direction.x !== 0) {
            if (snake.location.x > 100) {
                snake.location.x = 0;
            }
            else if (snake.location.x < 0) {
                snake.location.x = 100;
            }
            else {
                snake.location.x += snake.direction.x * snake.speed;
            }
        }
        else {
            if (snake.location.y > 100) {
                snake.location.y = 0;
            }
            else if (snake.location.y < 0) {
                snake.location.y = 100;
            }
            else {
                snake.location.y += snake.direction.y * snake.speed;
            }
        }

        if (hasEatenFood()) {
            snake.length++;
            queue.maxLength++;
            score++;
            document.getElementById('score').innerText = score.toString();
            placeFood();
        }

        window.setTimeout(moveSnake, 80);
    }

    /**
     * Place food
     */
    function placeFood() {
        food.location.x = Math.floor(Math.random() * 100 / snake.speed) * snake.speed;
        food.location.y = Math.floor(Math.random() * 100 / snake.speed) * snake.speed;
    }

    /**
     * Draw
     */
    function animate() {
        var i, point;

        canvas.clear();

        for (i = 0; i < queue.length; i++) {
            point = queue.get(i);
            canvas.rectPercent(point.x, point.y, snake.blockSize, snake.blockSize);
        }

        canvas.rectPercent(food.location.x, food.location.y, food.blockSize, food.blockSize);

        window.requestAnimationFrame(animate);
    }

    /**
     * Has the snake collided with itself?
     */
    function hasCollision() {
        return _.uniq(queue.arr, function (n) {
                return n.x + "_" + n.y;
            }).length !== queue.length;
    }

    /**
     * Has the snake eaten the food
     */
    function hasEatenFood() {
        return _.findWhere(queue.arr, {x: food.location.x, y: food.location.y}) != null;
    }

    return {
        init: init
    }
})();