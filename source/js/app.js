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

    }

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



