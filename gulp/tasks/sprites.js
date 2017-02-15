'use strict'


module.exports = function () {
    $.gulp.task('sprites', function () {
        return $.gulp.src('./source/sprite/*.svg')
            .pipe($.svgSprite())
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe($.gulp.dest($.config.root + '/assets/sprite/'));
    });
};