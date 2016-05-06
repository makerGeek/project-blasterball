$(document).ready(function() {
    setTimeout(
    function() 
    {
        myTimer = setInterval(myFunction, 10);
        console.log("started ballmover");
    }, 2000);
}
)


j = 0;

var xSpeed=3;
var ySpeed=3;
var speed=3;
var offset = $(".playground").offset();
var topLimit = offset.top;
var leftLimit = offset.left;
var bottomLimit = topLimit+$(".playground").innerHeight();
var rightLimit = leftLimit+$(".playground").innerWidth();


/*
var xSpeed = 10;
var ySpeed = 10;
var topLimit = 40;
var leftLimit = 380;
var bottomLimit = 550;
var rightLimit = 900;
*/

function myFunction() {
   
    var y = $(".ball").offset().top;
    var x = $(".ball").offset().left;
    var box = $(".box");
    $(".ball").offset({
        top: y + ySpeed,
        left: x + xSpeed
    });

  
    if (y+$(".ball").height() > $(".box").offset().top-2 && y+$(".ball").height() < $(".box").offset().top+2) {
        if (x+$(".ball").width() > box.offset().left && x < box.offset().left + box.width())
            ySpeed = -speed;
    
    } 
      /*
    else 
    if (y > bottomLimit)
        clearInterval(myTimer);
        */

    
    if(y+$(".ball").height() > bottomLimit){
        ySpeed=-speed;
    }
    if (y < topLimit) {
        ySpeed = speed;
    }
    if (x+$(".ball").width() > rightLimit) {
        xSpeed = -speed;
    }
    if (x < leftLimit) {
        xSpeed = speed;
    }
    j++;
    if (j > 4000) {
        clearInterval(myTimer);
    }

}
