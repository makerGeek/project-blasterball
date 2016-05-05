$(document).ready(function(){setTimeout(
  function()
  {
myTimer = setInterval(myFunction, 30);
   }, 2000);
  }
)


j= 0;
var xSpeed=10;
var ySpeed=10;
var offset = $(".playground").offset();
var topLimit = offset.top;
var leftLimit = offset.left;
var bottomLimit = topLimit+$(".playground").innerHeight();
var rightLimit = leftLimit+$(".playground").innerWidth();

function myFunction() {

  var y=$(".ball").offset().top;
  var x=$(".ball").offset().left;
  $(".ball").offset({top: y + ySpeed, left: x + xSpeed});
  if(y>$(".playground").offset().top+$(".playground").height()) {
    ySpeed=-10;
  }
  if(y<topLimit) {
    ySpeed=10;
  }
  if(x>rightLimit) {
    xSpeed=-10;
  }
  if(x<leftLimit) {
    xSpeed=10;
  }
    j++;
    if (j > 4000) {
        clearInterval(myTimer);
    }

}
