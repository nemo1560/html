AOS.init({
    duration: 2000,
  });

$('.navbar .floor').click(function () {
    var index = $(this).index();
    $('.row #content').removeClass('active');
    $('.row #content').eq(index - 1).addClass('active');
    return false;
})

/*$('.img-skill').click(function(){
    var i = $(this).index();
    var x = $('.detail');
if(x.is(':visible')){
    x.hide();
}
if($(this).eq(i).find('.detail')){
    x.eq(i).show();
    x.eq(i).delay(2000).fadeOut();
}
    return false;
})*/