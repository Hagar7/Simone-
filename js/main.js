let offsethead = $('.caption').offset().top;
console.log(offsethead);




$(window).scroll(function(){
    if($(window).scrollTop() > 70){
        $('.changeNav').css({'backgroundColor':'#333','transition':'1s'})
    }else {
        $('.changeNav').css('backgroundColor','transparent')
    }
    if($(window).scrollTop() >130 ){
      $('#topBtn').fadeIn(2000)
    }else{
        $('#topBtn').fadeOut(1000) 
    }
})


$('.nav-link').click(function(){
 let currentLink =  $(this).attr('href');
 let currentOffset = $(currentLink).offset().top;
$('body,html').animate({scrollTop: currentOffset} , 500)
})

$('#topBtn').click(function(){
    $('body,html').animate({scrollTop: 0} , 1000)
})
