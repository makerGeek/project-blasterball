$(document).ready(function(){setTimeout(
  function()
  {
myTimer = setInterval(myFunction, 30);
   }, 2000);
  }
)


j= 0;
var x=10;
var y=10;
function myFunction() {

  var a=$(".ball").offset().top;
  var b=$(".ball").offset().left;
  $(".ball").offset({top: a + y, left: b + x});
  if(a>$(".box").offset().top-70) {
    y=-10;
  }
  if(a<70) {
    y=10;
  }
  if(b>500) {
    x=-10;
  }
  if(b<20) {
    x=10;
  }
    j++;
    if (j > 4000) {
        clearInterval(myTimer);
    }

}
