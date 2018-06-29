var imgs = $('.img');
var index = 0;
var len = $('.img').length;
change();
function change() {
    imgs.removeClass('active');
    if (index == len) {
        index = 0;
    }
    index++;
    imgs.eq(index - 1).addClass('active');
    setTimeout(change, 2000);
}

$('.navbar-header').hover(function(){
    if($(document).width()<=765){
        $(this).find('.child').toggle();
        return false;
    }
    
})