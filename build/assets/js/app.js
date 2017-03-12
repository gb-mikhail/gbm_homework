//--------------------Start-preloader
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
    };

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

preloader.init();

//--------------------End-preloader



//--------------------start-Swipe-navigation
var swipe = (function(){

    var swipe = function() {
        $('.swipe-button__item').on('click', function () {
            $(this).addClass('swipe-button__item_active').siblings().removeClass('swipe-button__item_active');
            $('body').animate({scrollTop: $('.main_h2').eq($(this).index()).offset().top}, 1000);
        });
    };
    return{
        init:swipe
    }
}());

swipe.init();
//--------------------End-swipe-navigation

//--------------------Start-swipe-button-animation
var swipeAnimation = (function () {

    var swipeAnimation = function (){
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
    };
    return{
        init:swipeAnimation
    }
}());

swipeAnimation.init();

//--------------------End-swipe-button-animation

//--------------------Start-up-button

(function($) {
    $(function() {

        $('.review-block__up-link').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
        })
    })
})($);
//--------------------End-up-button

//--------------------Start-down-button
(function($) {
    $(function() {

        $('.header__down-button_link').click(function() {
            $('html, body').animate({scrollTop: 765},500);
            return false;
        })
    })
})($);

//--------------------End-down-button

//--------------------start-slider
$('.slider__button-up').on('click', function () {
    var n=$('.slider__item_active').index();
    var m=$('.slideshow__list').children('li').length;
    if(n==m-1){
        $('.slideshow__item').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    } else if(n==m-2){
        $('.slideshow__item').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else {
        $('.slideshow__item').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n+2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }
});
$('.slider__button-down').on('click', function () {
    var n=$('.slider__item_active').index();
    var m=$('.slideshow__list').children('li').length;
    if(n==0){
        $('.slideshow__item').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else if(n==1){
        $('.slideshow__item').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else {
        $('.slideshow__item').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n-2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }
});
//--------------------END-slider

//--------------------Start-circle-animation
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
//--------------------End-circle-animation

//--------------------Start-burger-button
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
//--------------------End-burger-button

//----------------- parallax-main-page
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
//----------------- END-parallax-main-page

//----------------- Auth-button-main-page
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
//----------------- End-auth-button-main-page

//--------------------Start-Enter-button
var enterButton = document.querySelector('#auth');
var answer = document.querySelector('#myanswer');

enterButton.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.txt');
    xhr.send();
    xhr.addEventListener('load', function () {
        answer.innerText = xhr.responseText;
    });
});
//--------------------End-Enter-button
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXByZWxvYWRlclxyXG52YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcbiAgICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpO1xyXG5cclxuICAgIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xyXG4gICAgICAgIHZhciBpc0ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpO1xyXG4gICAgICAgIHZhciBwYXRoID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzSW1nKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgJyUnKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID49IDEwMCkge1xyXG4gICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcsIGksIGltYWdlcyl7XHJcbiAgICAgICAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjIDogaW1nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW1ncyA9IGltZ1BhdGgudG9BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgbG9hZEltYWdlcyhpbWdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5wcmVsb2FkZXIuaW5pdCgpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1wcmVsb2FkZXJcclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXJ0LVN3aXBlLW5hdmlnYXRpb25cclxudmFyIHN3aXBlID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHN3aXBlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnN3aXBlLWJ1dHRvbl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc3dpcGUtYnV0dG9uX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3N3aXBlLWJ1dHRvbl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnLm1haW5faDInKS5lcSgkKHRoaXMpLmluZGV4KCkpLm9mZnNldCgpLnRvcH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OnN3aXBlXHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5zd2lwZS5pbml0KCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtc3dpcGUtbmF2aWdhdGlvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXN3aXBlLWJ1dHRvbi1hbmltYXRpb25cclxudmFyIHN3aXBlQW5pbWF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc3dpcGVBbmltYXRpb24gPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnN3aXBlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6ICcwJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuc3dpcGUtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkbWVzc2FnZSA9ICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRtZXNzYWdlLmNzcygnZGlzcGxheScpICE9ICdibG9jaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5b3VyQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLm15RXZlbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXlvdXJDbGljayAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3dpcGUtYnV0dG9uX19sZWZ0LW5hdicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLm15RXZlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OnN3aXBlQW5pbWF0aW9uXHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5zd2lwZUFuaW1hdGlvbi5pbml0KCk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXN3aXBlLWJ1dHRvbi1hbmltYXRpb25cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC11cC1idXR0b25cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcucmV2aWV3LWJsb2NrX191cC1saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LDUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSkoJCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtdXAtYnV0dG9uXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtZG93bi1idXR0b25cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5oZWFkZXJfX2Rvd24tYnV0dG9uX2xpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogNzY1fSw1MDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKCQpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1kb3duLWJ1dHRvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXJ0LXNsaWRlclxyXG4kKCcuc2xpZGVyX19idXR0b24tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09bS0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKDApLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKDEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKDApLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItY29tbWVudF9fYmxvY2snKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKzIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG59KTtcclxuJCgnLnNsaWRlcl9fYnV0dG9uLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09MCl7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobS0yKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSBpZihuPT0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShuLTIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FTkQtc2xpZGVyXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtY2lyY2xlLWFuaW1hdGlvblxyXG52YXIgYW5pbWF0ZUNzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2hlY2tEaXN0YW5jZSA9IGZ1bmN0aW9uIChzY3JvbGxUb3AsIGVsZW0pIHtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgdmFyIHdpbmRvd01hcmdpbiA9IE1hdGguY2VpbCgkKHdpbmRvdykuaGVpZ2h0KCkgLyAxKTtcclxuICAgICAgICB2YXIgdG9wQm9yZGVyID0gb2Zmc2V0IC0gc2Nyb2xsVG9wIC0gd2luZG93TWFyZ2luO1xyXG4gICAgICAgIHZhciBib3R0b21FZGdlID0gZWxlbS5vdXRlckhlaWdodCh0cnVlKSArIG9mZnNldDtcclxuICAgICAgICB2YXIgYm90dG9tQm9yZGVyID0gc2Nyb2xsVG9wICsgd2luZG93TWFyZ2luIC0gYm90dG9tRWRnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvcEJvcmRlciA8PTAgJiYgYm90dG9tQm9yZGVyIDw9MDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGFuaW1hdGlvbkFjdGlvbnMgPSB7XHJcbiAgICAgICAgaHRtbCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaHRtbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjc3MnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdqcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGhwIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaHAnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15c3FsIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdteXNxbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZWpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdub2RlanMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vbmdvIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtb25nbycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2l0IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdnaXQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGd1bHAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2d1bHAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1zID0gJCgnLmFuaW1hdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tEaXN0YW5jZShzY3JvbGxUb3AsICR0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uVHlwZSA9ICR0aGlzLmRhdGEoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25BY3Rpb25zW2FuaW1hdGlvblR5cGVdLmNhbGwoJHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuYW5pbWF0ZUNzcy5pbml0KCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtY2lyY2xlLWFuaW1hdGlvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWJ1cmdlci1idXR0b25cclxudmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4kKCcuaGVhZGVyX19idXJnZXItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtYnVyZ2VyLWJ1dHRvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBwYXJhbGxheC1tYWluLXBhZ2VcclxudmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4JyksXHJcbiAgICBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICBwYWdlWSA9IGUucGFnZVksXHJcbiAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICAgIGRpdmlkZXIgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICAgICAgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnKyBwb3NpdGlvblggKydweCwnICsgcG9zaXRpb25ZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gRU5ELXBhcmFsbGF4LW1haW4tcGFnZVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBBdXRoLWJ1dHRvbi1tYWluLXBhZ2VcclxuJCgnLmF1dGgtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOidyb3RhdGVZKDE4MGRlZyknLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtLXN0eWxlJzoncHJlc2VydmUtM2QnLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6Jy44cycsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6J3JlbGF0aXZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5hdXRoLWJ1dHRvbicpLmhpZGUoKVxyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcl9fd3JhcHBlcicpLmNzcyh7XHJcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonMy40Mzc1cmVtJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbik7XHJcblxyXG4kKCcjYmFjay10by1tYWluLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmxpcC1jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzoncm90YXRlWSgzNjBkZWcpJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZSc6J3ByZXNlcnZlLTNkJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOicuOHMnLFxyXG4gICAgICAgICAgICAncG9zaXRpb24nOidyZWxhdGl2ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuYXV0aC1idXR0b24nKS5zaG93KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXJfX3dyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICdtYXJnaW4tdG9wJzonMHB4J1xyXG4gICAgfSlcclxuICAgIH1cclxuKTtcclxuXHJcbiQoKS5vbignY2xpY2snKTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBFbmQtYXV0aC1idXR0b24tbWFpbi1wYWdlXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtRW50ZXItYnV0dG9uXHJcbnZhciBlbnRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRoJyk7XHJcbnZhciBhbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlhbnN3ZXInKTtcclxuXHJcbmVudGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHhoci5vcGVuKCdHRVQnLCAndGVzdC50eHQnKTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhbnN3ZXIuaW5uZXJUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgIH0pO1xyXG59KTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1FbnRlci1idXR0b24iXX0=
