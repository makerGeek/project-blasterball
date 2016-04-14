
i = 0;
function myFunction() {
    $(".playground").append("<div class=\"brick\"></div>");
    i++;
    console.log("printing brick " + i);
    if (i > 22) {
        clearInterval(myTimer);
        console.log("cleared")
        $(".playground").append("<div class=\"box\"></div>");
    }

}

myTimer = setInterval(myFunction, 40);
