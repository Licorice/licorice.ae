var main = function(){
    $('.icon-menu').click(function() {$('.menu').animate({left: '0px'}, 200);

  });
        
    $('.icon-close').click(function() {$('.menu').animate({left: '-285px'}, 200);
        
    });
        
   /*   Enable when ranked stats works



    $('.icon-menu2').click(function() {$('.menu2').animate({left: '1555px'}, 200);

  });
        
    $('.icon-close2').click(function() {$('.menu2').animate({left: '1920px'}, 200);
        
    });
        
    */



};
  

$(document).ready(main);
