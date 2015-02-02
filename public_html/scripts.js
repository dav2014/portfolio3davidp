/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".practice").css("background-color", "black");
    $('.yeah').css('color', "white");
    $('#oneButton').bind('click', alertButtonClick);
    //$('body').css('background-image', '');
    $('.yeah').css('background-image', 'url(http://d3819ii77zvwic.cloudfront.net/wp-content/uploads/2014/03/120430.gif)');

    /* * the coding above makes the baCKGROUND a giff
     *
     *
     */

    $('#superHumans').accordion({header: "h3"});

});

/*the code below is what makes my button work
*/

function alertButtonClick() {
    alert("There was a button clicked");


}

$('document').ready(function() {
    $('.yeah').css('background-color', 'black');


    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addPara);

    $('#removePara').bind('click', removeAPara);

    $('#hide').bind('click', hideThePage);

    $('#show').bind('click', showThePage);

    $('#show').bind('click', 'hidden');
});


function removeAPara() {
    $('#randPara p:last').remove();
}


function addPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText() {
    $('#replaceWText').text('Replaced!');
}


/*the coding below is what makes the screen go away when i press hide
 * 
 */

function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 500);
    $('#show').show('fold', {}, 100);
}


function showThePage() {
    $('diiv').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}




$(window).load(function() {

    var theWindow = $(window),
            $bg = $("#bg"),
            aspectRatio = $bg.width() / $bg.height();

    function resizeBg() {

        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg
                    .removeClass()
                    .addClass('bgheight');
        } else {
            $bg
                    .removeClass()
                    .addClass('bgwidth');
        }

    }

    theWindow.resize(resizeBg).trigger("resize");

});




$("#target").submit(function(event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
});