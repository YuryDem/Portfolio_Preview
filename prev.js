$(function() {

    $('.img-box').click(function(){        
        if($(this).hasClass('dark')){
            var urlDark = "https://yurydem.github.io/Jon_Voxter_Portfolio_dark/";
            $(location).attr('href',urlDark);
        }
        if($(this).hasClass('gray')){
            var urlGray = "https://yurydem.github.io/Jon_Voxter_Portfolio_light/";
            $(location).attr('href',urlGray);
        }
        if($(this).hasClass('light')){
            var urlLight = "https://yurydem.github.io/Jon_Voxter_Portfolio_white/";
            $(location).attr('href',urlLight);
        }
        if($(this).hasClass('light-gray')){
            var urlLightGray = "https://yurydem.github.io/Lusine_Portfolio/";
            $(location).attr('href',urlLightGray);
        }

    });

});