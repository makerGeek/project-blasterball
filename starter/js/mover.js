


pos = 0;
$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        //left arrow key
        if (pos < -3)
            break;
        pos--;
        $(".box").finish().animate({
            left: "-=55"
        });
        break;

    case 39:
        //right arrow key
        if (pos > 3)
            break;
        pos++;
        $(".box").finish().animate({
            left: "+=55"
        });
        break;

    }
    console.log(pos)
});


var gameOn=1;
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
      if(gameOn==1){
           clearInterval(myTimer);
        gameOn=0;
      } else {
          gameOn=1;
          myTimer = setInterval(myFunction, 15);
      }

  }
});