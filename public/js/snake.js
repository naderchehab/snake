(function() {
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();

    function resizeCanvas() {
        canvas.height = window.innerHeight * 0.95;
        canvas.width =  Math.min(canvas.height * 1.5, document.body.clientWidth);
        draw();
    }

    function rectPercent(x, y, width, height) {
        ctx.beginPath();
        ctx.rect(x*canvas.width/100, y*canvas.height/100, width*canvas.width/100, height*canvas.height/100);
        ctx.fill();
        ctx.closePath();
    }

    var x = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rectPercent(x, 20, 2, 3);

        if (x < 98) {
            x += 1;
        }

        window.requestAnimationFrame(draw);
    }
})();