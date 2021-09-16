$(document).ready(function(){

    //---------Hover över meny-------------
    let $navEl = $('#navList a')
    $navEl.mouseenter(function(e){
        $(e.target).css('background-color', '#D4AF37');
    })
    $navEl.mouseleave(function(e){
        $(e.target).css('background-color', '#d4d4d4');
    })

    //---------Öpnna och stäng meny i mobil version-------------
    $('#navBox').click(function(){
        let $nav = $('#navList');
        
        if($nav.hasClass('unvisible')){
            $nav.removeClass('unvisible');
            $nav.addClass('visible'); 
            $('#navBoxImg').attr('src', 'img/navX.png');
        }else{
            $nav.removeClass('visible');
            $nav.addClass('unvisible');
            $('#navBoxImg').attr('src', 'img/nav.png');
        };
    });
});