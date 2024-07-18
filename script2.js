$(document).ready(function(){
    function closeElement(){
        if($(window).width()<= 720){
            $('.add2').height('400PX');
            $('.me').hide();
            $('.nav-toggle').click(function(){
                $('.me').toggle();
            });
        }
        else{
            $('.me').show();
        }
    }
    closeElement()
    $(window).resize(function(){
        closeElement();
    });
})
