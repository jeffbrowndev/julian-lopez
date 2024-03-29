/*=========================================
 * animatedModal.js: Version 1.0
 * author: João Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT
=========================================*/

(function ($) {

    $.fn.animatedModal = function(options) {
        var modal = $(this);
        let clickedModal = undefined;
        const modals = Array.from(document.querySelectorAll('.modal'));
        //Defaults
        var settings = $.extend({
            modalTarget:'animatedModal',
            position:'fixed',
            width:'100%',
            height:'100%',
            top:'76px',
            left:'0px',
            zIndexIn: '100',
            zIndexOut: '-9999',
            color: '$white',
            opacityIn:'1',
            opacityOut:'0',
            animatedIn:'zoomIn',
            animatedOut:'zoomOut',
            animationDuration:'0.5s',
            overflow:'auto',
            // Callbacks
            beforeOpen: function() {},
            afterOpen: function() {},
            beforeClose: function() {},
            afterClose: function() {}
        }, options);

        var closeBt = $('.close-'+settings.modalTarget);

        //console.log(closeBt)

        var href = $(modal).attr('href'),
            id = $('body').find('#'+settings.modalTarget),
            idConc = '#'+id.attr('id');
            //console.log(idConc);
            // Default Classes
            id.addClass('animated');
            id.addClass(settings.modalTarget+'-off');

        //Init styles
        var initStyles = {
            'position':settings.position,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left,
            'background-color':settings.color,
            'overflow-y':settings.overflow,
            'z-index':settings.zIndexOut,
            'opacity':settings.opacityOut,
            '-webkit-animation-duration':settings.animationDuration,
            '-moz-animation-duration':settings.animationDuration,
            '-ms-animation-duration':settings.animationDuration,
            'animation-duration':settings.animationDuration
        };
        //Apply styles
        id.css(initStyles);

        modal.click(function(event) {
            event.preventDefault();
            clickedModal = event.currentTarget.offsetParent.id;
            $('body, html').css({'overflow':'hidden'});
            $('#close').css('display', 'block');

            if (href == idConc) {
                if (id.hasClass(settings.modalTarget+'-off')) {
                    id.removeClass(settings.animatedOut);
                    id.removeClass(settings.modalTarget+'-off');
                    id.addClass(settings.modalTarget+'-on');
                }

                 if (id.hasClass(settings.modalTarget+'-on')) {
                    settings.beforeOpen();
                    id.css({'opacity':settings.opacityIn,'z-index':settings.zIndexIn});
                    id.addClass(settings.animatedIn);
                    id.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterOpen);
                };
            }
        });



        closeBt.click(function(event) {
            event.preventDefault();
            $('body, html').css({'overflow':'auto'});
            $('#close').css('display', 'none');

            settings.beforeClose(); //beforeClose
            if (id.hasClass(settings.modalTarget+'-on')) {
                id.removeClass(settings.modalTarget+'-on');
                id.addClass(settings.modalTarget+'-off');
            }

            if (id.hasClass(settings.modalTarget+'-off')) {
                id.removeClass(settings.animatedIn);
                id.addClass(settings.animatedOut);
                id.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterClose);
            };

        });

        function afterClose () {
            id.css({'z-index':settings.zIndexOut});
            settings.afterClose(); //afterClose
        }

        function afterOpen () {
            settings.afterOpen(); //afterOpen
        }

    }; // End animatedModal.js

}(jQuery));

//activate modal
$(document).ready(() => {
  $.lazyLoadXT.autoInit=false;
  $(".modal-main").animatedModal();
})
