$(document).ready(function(){

    var menu=$("#menuHeader").children();

    menu.each(function(i,value){
        $(this).css({
            opacity:"0",
            top:"-25px"
            
        });

        $(this).animate({
            opacity:"1",
            top:"0",
        },1000 + (i*500))
    })

    if($(Window).width()>500){
        $("header .textos").css({
            opacity:"0",
            marginTop:"0"
        })
        $("header .textos").animate({
            opacity:"1",
            marginTop:"-60px"
        },1500)
    }

    var acercaDe= $("#acerca_de").offset().top;

    $("#btn_acerca_de").on("click",function(){
        $("html, body").animate({
            scrollTop:acercaDe
        },500)
    })




    var sclrollMenu= $("#menu").offset().top;

    $("#btn_menu").on("click",function(){
        $("html, body").animate({
            scrollTop:sclrollMenu
        },500)
    })



    var sclrollGaleria= $("#galeria").offset().top;

    var sclrollGaleria= $("#galeria").offset().top;

    $("#btn_galeria").on("click",function(){
        $("html, body").animate({
            scrollTop:sclrollGaleria
        },500)
    })



    var sclrollUbicacion=$("#ubicacion").offset().top;

    $("#btn_ubicacion").on("click",function(){

        $("html, body").animate({
            scrollTop:sclrollUbicacion
        },500)
    })


})