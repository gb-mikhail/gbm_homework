'use strict';


module.exports = function () {
    $.gulp.task('imageMin', function () {
        return $.gulp.src('./source/images/*.png')
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.root + '/assets/icons'))
    })
};