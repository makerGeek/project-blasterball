$(document).ready(function() {
    setTimeout(
    function() 
    {
        myTimer = setInterval(myFunction, 15);
        console.log("started ballmover");
    }, 2000);
    
    setTimeout(
    function() 
    {
        timerHit = setInterval(hitListener, 10);
        console.log("started hitListener");
    }, 3000);

}
);



j = 0;
var bip = new Audio("sounds/bip.mp3");
var clap = new Audio("sounds/clap.mp3");
var belch = new Audio("sounds/gameover.wav");
belch.volume = .1;
var music = new Audio("sounds/music.mp3");
music.volume = .5;
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
music.play();
var xSpeed = 3;
var ySpeed = 3;
var speed = 3;
var offset = $(".playground").offset();
var topLimit = offset.top;
var leftLimit = offset.left;
var bottomLimit = topLimit + $(".playground").innerHeight();
var rightLimit = leftLimit + $(".playground").innerWidth();
var y;
var x;
var score = 0;


//volume and music control

$('#sounds').change(
function() {
    if ($(this).is(':checked')) {
        bip.volume = 0;
        clap.volume = 0;
        belch.volume = 0;
    } else {
        bip.volume = 0;
        clap.volume = 0;
        belch.volume = 0.1;
    
    }
});


$('#music').change(
function() {
    if ($(this).is(':checked')) {
        music.volume = 0;
    } else {
        music.volume = 0.5;
    
    }
});


// end of volume and music control



function hitListener() {
    for (var i = 0; i < 24; i++) {
        var brick = $("#brick" + i);
        
        //check if the ball hit the brick from the bottom
        if (
        brick.css("opacity") == 1 
        && x + $(".ball").width() / 2 > brick.offset().left - 5 
        && x + $(".ball").width() / 2 < brick.offset().left + brick.width() + 5 
        && y > brick.offset().top + brick.height() - 5 
        && y < brick.offset().top + brick.height() + 5
        ) {
            bip.play();
            ySpeed = speed;
            brick.fadeTo("fast", 0.2);
            score += 10;
            $("#score").html(score);
        }
        
        //check if the ball hit the brick from the left
        if (
        brick.css("opacity") == 1 
        && x > brick.offset().left - 5 
        && x < brick.offset().left + 5 
        && y > brick.offset().top - 5 
        && y < brick.offset().top + brick.height() + 5
        ) {
            bip.play();
            xSpeed = -speed;
            brick.fadeTo("fast", 0.2);
            score += 10;
            $("#score").html(score);
        }
        
        //check if the ball hit the brick from the right
        if (
        brick.css("opacity") == 1 
        && x > brick.offset().left + brick.width() - 5 
        && x < brick.offset().left + brick.width() + 5 
        && y > brick.offset().top - 5 
        && y < brick.offset().top + brick.height() + 5
        ) {
            bip.play();
            xSpeed = speed;
            brick.fadeTo("fast", 0.2);
            score += 10;
            $("#score").html(score);
        }
        
        //check if the ball hit the brick from the top
        if (
        brick.css("opacity") == 1 
        && x > brick.offset().left - 5 
        && x < brick.offset().left + brick.width() + 5 
        && y > brick.offset().top - 5 
        && y < brick.offset().top + 5
        ) {
            bip.play();
            ySpeed = -speed;
            brick.fadeTo("fast", 0.2);
            score += 10;
            $("#score").html(score);
        }
    
    }
}

function myFunction() {
    
    
    
    y = $(".ball").offset().top;
    x = $(".ball").offset().left;
    var box = $(".box");
    $(".ball").offset({
        top: y + ySpeed,
        left: x + xSpeed
    });
    
    
    
    
    if (y + $(".ball").height() > $(".box").offset().top - 2 && y + $(".ball").height() < $(".box").offset().top + 2) {
        if (x + $(".ball").width() > box.offset().left && x < box.offset().left + box.width()) {
            clap.play();
            ySpeed = -speed;
        }
    
    
    }
    
    
    if (y + $(".ball").height() > bottomLimit) {
        music.pause();
        belch.play();
        clearInterval(myTimer);
    
    }
    if (y < topLimit) {
        clap.play();
        ySpeed = speed;
    }
    if (x + $(".ball").width() > rightLimit) {
        clap.play();
        xSpeed = -speed;
    }
    if (x < leftLimit) {
        clap.play();
        xSpeed = speed;
    }
    j++;
    
    //uncomment to make the game stop after some time
    /*if (j > 4000) {
        clearInterval(myTimer);
    }*/

}
