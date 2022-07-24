$(document).ready(function(){
    var WindowWidth=$(window).width()
    if(WindowWidth>800){
        $(window).scroll(function(){

            var scroll=$(window).scrollTop();

            $("header .textos").css({
                transform:"translate(0px,"+ scroll/2 +"%)"
            })

            $(".main #scrollArticle").css({
                transform:"translate(0px,-"+ scroll/8 +"%)"
            })


        })
    }
})