$(document).ready(function() {
    setTimeout(
    function() 
    {
        myTimer = setInterval(myFunction, 30);
        console.log("started ballmover");
    }, 2000);
}
)


j = 0;

var xSpeed=10;
var ySpeed=10;
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
    console.log("ooooo");
    
    var y = $(".ball").offset().top;
    var x = $(".ball").offset().left;
    var box = $(".box");
    $(".ball").offset({
        top: y + ySpeed,
        left: x + xSpeed
    });

  
    if (y > $(".box").offset().top - 20 && y < $(".box").offset().top + 20) {
        if (x > box.offset().left && x < box.offset().left + box.width())
            ySpeed = -10;
    
    } 
      /*
    else 
    if (y > bottomLimit)
        clearInterval(myTimer);
        */

    
    if(y+$(".ball").height() > bottomLimit){
        ySpeed=-10;
    }
    if (y < topLimit) {
        ySpeed = 10;
    }
    if (x+$(".ball").width() > rightLimit) {
        xSpeed = -10;
    }
    if (x < leftLimit) {
        xSpeed = 10;
    }
    j++;
    if (j > 4000) {
        clearInterval(myTimer);
    }

}
