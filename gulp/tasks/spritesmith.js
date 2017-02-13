'use strict';


module.exports = function () {
    $.gulp.task('sprite', function () {
        return $.gulp.src('./source/icons/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/sprite'))
    })
};



