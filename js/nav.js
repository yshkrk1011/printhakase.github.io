$(function() {
    $('#nav li a img')
        .each(function(i){
            $(this).css('background', 'url(images/icon_fb.png'+(i+1)+'_hover.png) no-repeat');
        })
        .find('img').hover(
            function(){  
                $(this).stop().animate({'opacity' : '0'}, 500);  
            },
            function(){
                $(this).stop().animate({'opacity' : '1'}, 1000);
            }
        ); 
    }
);