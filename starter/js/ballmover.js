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
)



j = 0;

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

/*
var xSpeed = 10;
var ySpeed = 10;
var topLimit = 40;
var leftLimit = 380;
var bottomLimit = 550;
var rightLimit = 900;
*/


function hitListener() {
    for (var i = 0; i < 23; i++) {
        var brick = $("#brick" + i);

        //check if the ball hit the brick from the bottom
        if (brick.css("opacity") == 1 && x > brick.offset().left - 5 && x < brick.offset().left + brick.width() + 5 && y > brick.offset().top + brick.height() - 5 && y < brick.offset().top + brick.height() + 5) {
            ySpeed = speed;
            brick.fadeTo("fast", 0.2);
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
            ySpeed = -speed;
        }
    
    
    }
    
    
    if (y + $(".ball").height() > bottomLimit) {
        clearInterval(myTimer);
    
    }
    if (y < topLimit) {
        ySpeed = speed;
    }
    if (x + $(".ball").width() > rightLimit) {
        xSpeed = -speed;
    }
    if (x < leftLimit) {
        xSpeed = speed;
    }
    j++;
    
    //uncomment to make the game stop after some time
    /*if (j > 4000) {
        clearInterval(myTimer);
    }*/

}
