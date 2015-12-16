var one = "#ff0000",
    two = "#ff00ff",
    three = "#0000ff",
    four = "#00ffff",
    five = "#00ff00",
    six = "ffff00";

$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#one").position().top) {
        $('body').css('background', $("#one").attr("data-color"));
        $('body').css('color', 'white');
        $('.sideview-container').css('display', 'inline');
        $('.sideview-container').html('<div id="profile"><img src="images/profile.jpg"/></div>');
    };
    if ($(document).scrollTop() > $("#two").position().top) {
        $('body').css('background', $("#two").attr("data-color"))
        $('body').css('color', 'black');
        $('#profile').empty();
        $('#gamenight').on("mouseover", function(e){   
            $('.sideview-container').html('<div class="work"><img src="images/gamenight.png"/></div>');
        });
        $('#hey-9').on("mouseover", function(e){
                $('.sideview-container').html('<div class="work"><img src="images/hey9.png"/></div>');
        });
        $('#gamenight').on("click", function(e){
            window.open("http://dbc-gamenight.herokuapp.com/", "Gamenight");
        });
        $('#hey-9').on("click", function(e){
            window.open("http://hey-9.herokuapp.com/", "Hey-9");
        })
    };
    if ($(document).scrollTop() > $("#three").position().top) {
        $('body').css('background', $("#three").attr("data-color"))
        $('body').css('color', 'white');
        
    };
    if ($(document).scrollTop() > $("#four").position().top) {
        $('body').css('background', $("#four").attr("data-color"))
        $('body').css('color', 'black');
    };
    if ($(document).scrollTop() >= $("#five").position().top) {
        $('body').css('background', $("#five").attr("data-color"))
        $('body').css('color', 'white');
    };
    if ($(document).scrollTop() >= $("#six").position().top) {
        $('body').css('background', $("#six").attr("data-color"))
        $('body').css('color', 'black');
        // $('.sideview-container').html("");
    };
});