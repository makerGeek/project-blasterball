
i = 0;
function myFunction() {
    $(".playground").append("<div class=\"brick col-sm-2 col-xs-2 col-md-2\" id=\"brick"+i+"\"></div>");
    i++;
    console.log("printing brick " + i);
    if (i > 23) {
        clearInterval(myTimer);
        console.log("cleared")
        $(".playground").append("<div class=\"box\"></div>");
         $(".playground").append("<div class=\"ball\"><img src=\"img/ball.png\"></div>");
    }

}

myTimer = setInterval(myFunction, 40);
