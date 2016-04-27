$(document).ready(function(){setTimeout(
  function()
  {
myTimer = setInterval(myFunction, 30);
   }, 2000);
  }
)


j= 0;
function myFunction() {

  var a=$(".ball").offset().top;
  var b=$(".ball").offset().left;
  $(".ball").offset({top: a + 10, left: b + 10});
    j++;
    if (j > 20) {
        clearInterval(myTimer);
    }

}
