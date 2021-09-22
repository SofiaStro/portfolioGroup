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

    /*//--------Animering slineIn text när man öppnar sidan--------
    $(window).load(slideInText)

    function slideInText(){
        $('#testTextBox').slideDown(2000);
    }
    
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
   let interval;
   let isGoing;
   let $btnBildspel = $('#buttonBildspel');

   $(window).load(startSlideShow());

    $btnBildspel.click(function(){
        if(isGoing === true){
            stopSlideShow();
            $btnBildspel.attr('src', 'img/Bildspel/buttonStart.jpg');
        }
        else{
            startSlideShow();
            $btnBildspel.attr('src', 'img/Bildspel/buttonStopp.jpg');
        }
    });

    function startSlideShow(){
        interval = setInterval(changeImg, 1700);
        isGoing = true;
    }

    function stopSlideShow(){
        clearInterval(interval);
        isGoing = false;
    }

    function changeImg(){
        $('#startBildspel').attr('src', images[i]);
       
        i++;
        if(i == images.length){
            i= 0; 
        }
   }
 

    //--------------Vilidering kontakt-formulär------------

    // Validate name
    let $nameInput = $('#contactBoxFormName');

    $nameInput.on('focus keyup', function(){
        if($nameInput.val().length >= 3 ){
            $nameInput.css('background-color', 'lightgreen');
        }
        else{
            $nameInput.css('background-color', '#FF6060');
        }
    });

    // Validate phone
    let $phoneInput = $('#contactBoxFormPhone');

    $phoneInput.on('focus keyup', function(){
        let validPhone = /^\d+$/;
        
        if(validPhone.test($phoneInput.val())){
            $phoneInput.css('background-color', 'lightgreen');
        }
        else{
            $phoneInput.css('background-color', '#FF6060');
        }
    });

    // Validate email
    let $emailInput = $('#contactBoxFormEmail');

    $emailInput.on('focus keyup', function(){
        let validEmail = /[^@]+@[^@]+/;
        
        if(validEmail.test($emailInput.val())){
            $emailInput.css('background-color', 'lightgreen');
        }
        else{
            $emailInput.css('background-color', '#FF6060');
        }
    });

    // Validate message box
    let $msgInput = $('#contactBoxFormMsg');

    $msgInput.on('focus keyup', function(){
        if($msgInput.val() != ""){
            $msgInput.css('background-color', 'lightgreen');
        }
        else{
            $msgInput.css('background-color', '#FF6060');
        }
    });

});