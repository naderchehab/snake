/**
 * Created by Nader on 4/1/2015.
 */

var canvas = (function() {
    var canvasEl = document.getElementById('canvas')
        , ctx = canvasEl.getContext('2d');

    function init() {
        window.addEventListener('resize', resize, false);
        resize();
    }

    function clear() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }

    function resize() {
        var size = Math.min(window.innerHeight, window.innerWidth);
        canvasEl.height = size * 0.95;
        canvasEl.width = size * 0.95;
    }

    function rectPercent(x, y, width, height) {
        ctx.beginPath();
        //ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.fillStyle = '#25a233';
        ctx.rect(x*canvasEl.width/100, y*canvasEl.height/100, width*canvasEl.width/100, height*canvasEl.height/100);
        ctx.fill();
        ctx.closePath();
    }

    return {
        init: init
        , clear: clear
        , resize: resize
        , rectPercent: rectPercent
    }

})();