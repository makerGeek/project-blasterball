


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
