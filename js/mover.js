


$(document).keydown(function(e) {
    var box = $(".box");
    switch (e.which) {
    case 37:
        //left arrow key
        if (box.offset().left-55< $(".playground").offset().left)
            $(".box").finish().animate({
                left: "-=".concat(box.offset().left-$(".playground").offset().left-9)
            });
        else
        $(".box").finish().animate({
            left: "-=55"
        });
        break;

    case 39:
        //right arrow key
        if (box.offset().left+55+box.width()> $(".playground").offset().left+ $(".playground").width())
            $(".box").finish().animate({
                left: "+=".concat($(".playground").offset().left+$(".playground").width()-box.offset().left-box.width()+9)
            });
        else
            $(".box").finish().animate({
            left: "+=55"
        });
        break;

    }
});


var gameOn=1;
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
      if(gameOn==1){
           clearInterval(myTimer);
        gameOn=0;
            $(".playground").css("background", "crimson");
      } else {
          gameOn=1;
          myTimer = setInterval(myFunction, 15);
           $(".playground").css("background", "rgba(97, 221, 158, 0.63)");
      }

  }
});