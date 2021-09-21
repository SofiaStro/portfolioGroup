$(document).ready(function(){

    //---------Hover över meny och kontaktformulärs-knapp-------------
    $('#navList a, #contactBoxFormSubmit ').mouseenter(function(e){
        $(e.target).css('background-color', '#D4AF37');
    })
    $('#navList a, #contactBoxFormSubmit ').mouseleave(function(e){
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

    /*
    //--------Animering slideIn bild över annan bild------------
    $('#testBild1').mouseenter(function(){
        $('#testImgTwo').slideDown(1000);
    });
    $('#testBild1').mouseleave(function(){
        $('#testImgTwo').slideUp(1000);
    });

    //--------Animering slideIn text över annan bild------------
    $('#testBild2').mouseenter(function(){
        $('#testTextBox').slideDown(1000);
    });
    $('#testBild2').mouseleave(function(){
        $('#testTextBox').slideUp(1000);
    });
    */
    
   //-------------Automatiskt bildspel- Startsida---------
   let images = ['img/Bildspel/1.jpg', 'img/Bildspel/2.jpg', 'img/Bildspel/3.jpg', 'img/Bildspel/4.jpg'];
   let i = 0; 

   window.addEventListener('load', startSlideShow);

   function startSlideShow(){
       setInterval(changeImg, 1700);
   }

   function changeImg(){
       document.getElementById('startBildspel').setAttribute('src', images[i]);
       i++;
       if(i == images.length){
           i= 0; 
       }
   }
//--------------Starta och stoppa bildspel- Startsida---------












//--------------Vilidering kontakt-formulär---------




});