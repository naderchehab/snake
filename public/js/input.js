/**
 * Created by Nader on 4/9/2015.
 */

var input = (function () {

    function bindEvents(snake) {
        window.addEventListener('keydown', keyDownHandler.bind(snake), false);
        window.addEventListener('touchstart', touchStartHandler.bind(snake), false);
    }

    /**
     * Keydown event (Keyboard)
     */
    function keyDownHandler(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 38: // up
                if ((this.direction.x === 0 && this.direction.y === 1) === false) {
                    this.direction = {x: 0, y: -1};
                }
                break;
            case 40: // down
                if ((this.direction.x === 0 && this.direction.y === -1) === false) {
                    this.direction = {x: 0, y: 1};
                }
                break;
            case 37: // left
                if ((this.direction.x === 1 && this.direction.y === 0) === false) {
                    this.direction = {x: -1, y: 0};
                }
                break;
            case 39: // right
                if ((this.direction.x === -1 && this.direction.y === 0) === false) {
                    this.direction = {x: 1, y: 0};
                }
                break;
        }
    }

    /**
     * touchStart event (Mobile)
     */
    function touchStartHandler(e) {
        var x = e.targetTouches[0].pageX
            , y = e.targetTouches[0].pageY;

        var canvasBounds = document.getElementById('canvas').getBoundingClientRect();

        if (x <  canvasBounds.left || x > canvasBounds.right
            || y < canvasBounds.top || y > canvasBounds.bottom) {
            return;
        }

        x = (x - canvasBounds.left) * 100 / canvasBounds.width;
        y = (y - canvasBounds.top ) * 100 / canvasBounds.height;

        // up
        if (x > 25 && x < 75 && y < 50) {
            if ((this.direction.x === 0 && this.direction.y === 1) === false) {
                this.direction = {x: 0, y: -1};
            }
        }
        // down
        if (x >= 25 && x <= 75 && y >= 50) {
            if ((this.direction.x === 0 && this.direction.y === -1) === false) {
                this.direction = {x: 0, y: 1};
            }
        }
        // left
        if (x < 50 && y > 25 && y < 75) {
            if ((this.direction.x === 1 && this.direction.y === 0) === false) {
                this.direction = {x: -1, y: 0};
            }
        }
        // right
        if (x >= 50 && y > 25 && y < 75) {
            if ((this.direction.x === -1 && this.direction.y === 0) === false) {
                this.direction = {x: 1, y: 0};
            }
        }
    }

    return {
        bindEvents: bindEvents
    }
})();