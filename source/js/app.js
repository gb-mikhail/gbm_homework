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

//--------------------Start-swipe-position-on-scroll

$(function($) {
    $(window).scroll(function(){
        if (window.innerWidth >= 780) {
            if($(this).scrollTop()>600){
                $('.swipe-button__left-nav').addClass('menu-fixed');
                $('.fake-left-navigation').css({'display' : 'flex'});
            }
            else if ($(this).scrollTop()<600){
                $('.swipe-button__left-nav').removeClass('menu-fixed');
                $('.fake-left-navigation').css({'display' : 'none'});
            }
        }else {
            $('.swipe-button__left-nav').removeClass('menu-fixed');
            $('.fake-left-navigation').css({'display' : 'none'});
        }
    });
});


//--------------------End-swipe-position-on-scroll

//--------------------start-Swipe-navigation
var swipe = (function(){

    var swipe = function () {
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

//--------------------Start-Entry-button (Ajax)

var enterButton = $('#auth_1');

enterButton.on('click', function () {

    var validName = false;
    var validPass = false;
    var validCheckbox = false;
    var validRadioBtn = false;
    var name = $('#userName').val();
    var pass = $('#userPassword').val();
    var checkbox = $('#checkbox').prop('checked');
    var radioBtn = $('#radio-btn').prop('checked');

    if (name == "") {
        console.log('bad');
        $('#login-input__error').css({'display':'block'});
        $('#login-input__accept').css({'display':'none'});
        validName = false;
    } else {
        console.log('good');
        $('#login-input__error').css({'display':'none'});
        $('#login-input__accept').css({'display':'block'});
        validName = true;
    }
    if (pass == "") {
        console.log('bad');
        $('#pass-input__error').css({'display':'block'});
        $('#pass-input__accept').css({'display':'none'});
        validPass = false;
    } else {
        console.log('good');
        $('#pass-input__error').css({'display':'none'});
        $('#pass-input__accept').css({'display':'block'});
        validPass = true;
    }
    if (checkbox == true) {
        console.log('good-checked');
        validCheckbox = true;
    } else {
        console.log('bad-cheked');
        validCheckbox = false;
    }
    if (radioBtn == true) {
        console.log('good-radio-btn');
        validRadioBtn = true;
    } else {
        console.log('bad-radio-btn');
        validRadioBtn = false;
    }
    if (validName == true && validPass == true && validCheckbox == true && validRadioBtn == true) {
        console.log('Good Game Bro :)');
    }
});

//--------------------End-Entry-button (Ajax)

//--------------------Start-Google-map

function initMap () {
    var pointer = new google.maps.LatLng(49.541998, 25.609281),
        center = new google.maps.LatLng(49.544541, 25.594840);

    var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4369aa"},{"visibility":"on"}]}];

    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    var mapSettings = {
        center: center,
        scrollwheel: false,
        zoom: 15,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapSettings);

    var marker = new google.maps.Marker({
        icon: 'assets/img/map_marker_n.png',
        position: pointer,
        map: map,
        title: "I'm here!",
        animation: google.maps.Animation.BOUNCE
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}

//--------------------End-Google-map
