module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
    sprite:{
      all: {
        src: 'images/input/*.png',
        destImg: 'images/output/spritesheet.png',
        destCSS: 'css/sprites.css',

        algorithm: 'binary-tree',
        padding: 2,
        cssVarMap: function (sprite) {
        sprite.name = 'sprite-' + sprite.name;
      },

        algorithmOpts: {

        'sort': true
      },

        imgOpts: {
         'format': 'png',
         'quality': 100,
         'timeout': 10000
      },
    }}
  });

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith');
}