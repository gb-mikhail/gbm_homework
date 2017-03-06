//--------------------Start-preloader----------------------
var preloader = (function(){
    var percentsTotal = 0;
    var preloader = $('.preloader');

    var imgPath = $('*').map(function (ndx, element) {
        var background = $(element).css('background-image');
        var isImg = $(element).is('img');
        var path = '';

        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }

        if (isImg) {
            path = $(element).attr('src');
        }

        if (path) return path;
    });

    var setPercents = function(total, current) {
        var percents = Math.ceil(current / total * 100);

        $('.preloader__percents').text(percents + '%');

        if (percents >= 100) {
            preloader.fadeOut();
        }
    }

    var loadImages = function(images) {

        if (!images.length) preloader.fadeOut();

        images.forEach(function(img, i, images){
            var fakeImage = $('<img>', {
                attr : {
                    src : img
                }
            });

            fakeImage.on('load error', function(){
                percentsTotal++;
                setPercents(images.length, percentsTotal);
            });
        });

    };

    return {
        init: function () {
            var imgs = imgPath.toArray();

            loadImages(imgs);
        }
    }
}());

$(function () {
    preloader.init();
});

//--------------------End-preloader----------------------

//--------------------Start-swipe-button-animation-------------------
//
// $('.swipe-button').on('click', function () {
//     $('.swipe-button__left-nav').css({
//         'left': '0'
//     })
// });
//
// $().on('click');
//
// $(document).click( function(event){
//     if( $(event.target).closest(".swipe-button__left-nav").length )
//         return;
//     $(".swipe-button__left-nav").fadeOut("slow");
//     event.stopPropagation();
// });


$(function () {
    $('.swipe-button').on('click', function () {
         $('.swipe-button__left-nav').css({
             'left': '0'
         })
    });

    $('.swipe-button').click(function (e) {
        var $message = $('.swipe-button__left-nav');

        if ($message.css('display') != 'block') {
            $message.show();

            var yourClick = true;
            $(document).bind('click.myEvent', function (e) {
                if (!yourClick && $(e.target).closest('.swipe-button__left-nav').length == 0) {
                    $message.hide();
                    $(document).unbind('click.myEvent');
                }
                yourClick = false;
            });
        }

        e.preventDefault();
    });
});


//--------------------End-swipe-button-animation-------------------


//--------------------Start-circle-animation-------------------

var animateCss = (function () {
    var checkDistance = function (scrollTop, elem) {
        var offset = elem.offset().top;
        var windowMargin = Math.ceil($(window).height() / 1);
        var topBorder = offset - scrollTop - windowMargin;
        var bottomEdge = elem.outerHeight(true) + offset;
        var bottomBorder = scrollTop + windowMargin - bottomEdge;

        return topBorder <=0 && bottomBorder <=0;
    };

    var animationActions = {
        html : function () {
            $(this).addClass('html');
        },
        css : function () {
            $(this).addClass('css');
        },
        js : function () {
            $(this).addClass('js');
        },
        php : function () {
            $(this).addClass('php');
        },
        mysql : function () {
            $(this).addClass('mysql');
        },
        nodejs : function () {
            $(this).addClass('nodejs');
        },
        mongo : function () {
            $(this).addClass('mongo');
        },
        git : function () {
            $(this).addClass('git');
        },
        gulp : function () {
            $(this).addClass('gulp');
        }
    };


    return {
        init : function () {
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                var elems = $('.animate');

                elems.each(function () {
                   var $this = $(this);


                    if (checkDistance(scrollTop, $this)) {
                        var animationType = $this.data('animation');
                        animationActions[animationType].call($this);
                    }
                });

            })
        }
    }


})();

animateCss.init();

//--------------------End-circle-animation-------------------

//--------------------Start-burger-button----------------------

var isActive = false;

$('.header__burger-menu').on('click', function() {
    if (isActive) {
        $(this).removeClass('active');
        $('body').removeClass('menu-open');
    } else {
        $(this).addClass('active');
        $('body').addClass('menu-open');
    }

    isActive = !isActive;
});
//--------------------End-burger-button----------------------

//----------------- parallax-main-page--------------------

var parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

window.addEventListener('mousemove', function (e) {
    var pageX = e.pageX,
        pageY = e.pageY,
        initialX = (window.innerWidth / 2) - pageX,
        initialY = (window.innerHeight / 2) - pageY;

    [].slice.call(layers).forEach(function (layer, i) {
        var
            divider = i / 100,
            bottomPosition = (window.innerHeight / 2) * divider,
            positionX = initialX * divider,
            positionY = initialY * divider,
            layerStyle = layer.style,
            transformString = 'translate3d('+ positionX +'px,' + positionY + 'px, 0)';

            layerStyle.transform = transformString;
            layerStyle.bottom = '-' + bottomPosition + 'px';
    });
});
//----------------- END-parallax-main-page--------------------

//----------------- auth-button-main-page--------------------

$('.auth-button').on('click', function () {
        $('.flip-container').css({
            'transform':'rotateY(180deg)',
            'transform-style':'preserve-3d',
            'transition':'.8s',
            'position':'relative'
        });
        $('.auth-button').hide()
        $('.flip-container__wrapper').css({
            'margin-top':'3.4375rem'
        })
    }
);

$('#back-to-main-button').on('click', function () {
        $('.flip-container').css({
            'transform':'rotateY(360deg)',
            'transform-style':'preserve-3d',
            'transition':'.8s',
            'position':'relative'
        });
        $('.auth-button').show();
    $('.flip-container__wrapper').css({
        'margin-top':'0px'
    })
    }
);

$().on('click');

//----------------- End-auth-button-main-page--------------------




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtcHJlbG9hZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcbiAgICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpO1xyXG5cclxuICAgIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xyXG4gICAgICAgIHZhciBpc0ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpO1xyXG4gICAgICAgIHZhciBwYXRoID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzSW1nKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgJyUnKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID49IDEwMCkge1xyXG4gICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xyXG5cclxuICAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGltZywgaSwgaW1hZ2VzKXtcclxuICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xyXG4gICAgICAgICAgICAgICAgYXR0ciA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmMgOiBpbWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpKTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgcHJlbG9hZGVyLmluaXQoKTtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXByZWxvYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1zd2lwZS1idXR0b24tYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1xyXG4vLyAkKCcuc3dpcGUtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKS5jc3Moe1xyXG4vLyAgICAgICAgICdsZWZ0JzogJzAnXHJcbi8vICAgICB9KVxyXG4vLyB9KTtcclxuLy9cclxuLy8gJCgpLm9uKCdjbGljaycpO1xyXG4vL1xyXG4vLyAkKGRvY3VtZW50KS5jbGljayggZnVuY3Rpb24oZXZlbnQpe1xyXG4vLyAgICAgaWYoICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXZcIikubGVuZ3RoIClcclxuLy8gICAgICAgICByZXR1cm47XHJcbi8vICAgICAkKFwiLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXZcIikuZmFkZU91dChcInNsb3dcIik7XHJcbi8vICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuLy8gfSk7XHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc3dpcGUtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAkKCcuc3dpcGUtYnV0dG9uX19sZWZ0LW5hdicpLmNzcyh7XHJcbiAgICAgICAgICAgICAnbGVmdCc6ICcwJ1xyXG4gICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnN3aXBlLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyICRtZXNzYWdlID0gJCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKTtcclxuXHJcbiAgICAgICAgaWYgKCRtZXNzYWdlLmNzcygnZGlzcGxheScpICE9ICdibG9jaycpIHtcclxuICAgICAgICAgICAgJG1lc3NhZ2Uuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHlvdXJDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLm15RXZlbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF5b3VyQ2xpY2sgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLm15RXZlbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlvdXJDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXN3aXBlLWJ1dHRvbi1hbmltYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWNpcmNsZS1hbmltYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgYW5pbWF0ZUNzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2hlY2tEaXN0YW5jZSA9IGZ1bmN0aW9uIChzY3JvbGxUb3AsIGVsZW0pIHtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgdmFyIHdpbmRvd01hcmdpbiA9IE1hdGguY2VpbCgkKHdpbmRvdykuaGVpZ2h0KCkgLyAxKTtcclxuICAgICAgICB2YXIgdG9wQm9yZGVyID0gb2Zmc2V0IC0gc2Nyb2xsVG9wIC0gd2luZG93TWFyZ2luO1xyXG4gICAgICAgIHZhciBib3R0b21FZGdlID0gZWxlbS5vdXRlckhlaWdodCh0cnVlKSArIG9mZnNldDtcclxuICAgICAgICB2YXIgYm90dG9tQm9yZGVyID0gc2Nyb2xsVG9wICsgd2luZG93TWFyZ2luIC0gYm90dG9tRWRnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvcEJvcmRlciA8PTAgJiYgYm90dG9tQm9yZGVyIDw9MDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGFuaW1hdGlvbkFjdGlvbnMgPSB7XHJcbiAgICAgICAgaHRtbCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaHRtbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjc3MnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdqcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGhwIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaHAnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15c3FsIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdteXNxbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZWpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdub2RlanMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vbmdvIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtb25nbycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2l0IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdnaXQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGd1bHAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2d1bHAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9ICQoJy5hbmltYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrRGlzdGFuY2Uoc2Nyb2xsVG9wLCAkdGhpcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblR5cGUgPSAkdGhpcy5kYXRhKCdhbmltYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQWN0aW9uc1thbmltYXRpb25UeXBlXS5jYWxsKCR0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0pKCk7XHJcblxyXG5hbmltYXRlQ3NzLmluaXQoKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtY2lyY2xlLWFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1idXJnZXItYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4kKCcuaGVhZGVyX19idXJnZXItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtYnVyZ2VyLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gcGFyYWxsYXgtbWFpbi1wYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheCcpLFxyXG4gICAgbGF5ZXJzID0gcGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG5cclxuICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgIHZhclxyXG4gICAgICAgICAgICBkaXZpZGVyID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoJysgcG9zaXRpb25YICsncHgsJyArIHBvc2l0aW9uWSArICdweCwgMCknO1xyXG5cclxuICAgICAgICAgICAgbGF5ZXJTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tIEVORC1wYXJhbGxheC1tYWluLXBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBhdXRoLWJ1dHRvbi1tYWluLXBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJCgnLmF1dGgtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOidyb3RhdGVZKDE4MGRlZyknLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtLXN0eWxlJzoncHJlc2VydmUtM2QnLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6Jy44cycsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6J3JlbGF0aXZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5hdXRoLWJ1dHRvbicpLmhpZGUoKVxyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcl9fd3JhcHBlcicpLmNzcyh7XHJcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonMy40Mzc1cmVtJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbik7XHJcblxyXG4kKCcjYmFjay10by1tYWluLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmxpcC1jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzoncm90YXRlWSgzNjBkZWcpJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZSc6J3ByZXNlcnZlLTNkJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOicuOHMnLFxyXG4gICAgICAgICAgICAncG9zaXRpb24nOidyZWxhdGl2ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuYXV0aC1idXR0b24nKS5zaG93KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXJfX3dyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICdtYXJnaW4tdG9wJzonMHB4J1xyXG4gICAgfSlcclxuICAgIH1cclxuKTtcclxuXHJcbiQoKS5vbignY2xpY2snKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gRW5kLWF1dGgtYnV0dG9uLW1haW4tcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbiJdfQ==
