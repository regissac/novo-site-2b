aumenteBarra();
function aumenteBarra(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    $(".progress_bar").css("height", scrolled+"%");
    //$(".progress_bar").html(scrolled);
    
    if (scrolled >99) {
        $(".progress_bar").css("background", "green");
        $(".progress_bar").css("transition", ".7s");
    } 
    else if (scrolled >70) {
        $(".progress_bar").css("background", "orange");
        $(".progress_bar").css("transition", ".7s");
    }
    else if (scrolled <40) {
        $(".progress_bar").css("background", "#05c2d7");
        $(".progress_bar").css("transition", ".7s");
    }
}

$(document).scroll(function(){   
  aumenteBarra();
     
});