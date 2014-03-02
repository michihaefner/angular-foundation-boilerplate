module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify CSS files
    cssmin: {
      combine: {
        files: {
          'dev/css/main.css': ['dev/css/*.css']
        }
      },
      minify: {
        src: 'dev/css/main.css',
        dest: 'dep/main.css'
      }
    },

    //Concatenate and minify js with r.js RequireJS Optimizer
    requirejs: {
      compile: {
        options: {
          baseUrl: "dev/",
          mainConfigFile: "dev/requirejs.conf.js",
          //optimize: "uglify2",

          name: "app",
          out: "dev/optimized.js"
          /*,
          wrap: {
            start: '(function(){\'use strict\';',
            end: '}).call(this);'
          }
          */
        }
      }
    },

    // Compile from Sass to CSS
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dev/css/foundation.css': 'dev/scss/foundation.scss',       // 'destination': 'source'
          'dev/css/normalize.css': 'dev/scss/normalize.scss'
        }
      }
    },


    copy: {
      main: {
        files: [
          {expand: true, cwd: 'dev/img/', src: ['**'], dest: 'dep/img/'},
          {expand: true, cwd: 'dev/fonts/', src: ['**'], dest: 'dep/fonts/'},
          {src: 'dev/optimized.js', dest:'dep/optimized.js'},
          {src: 'dev/index.html', dest:'dep/index.html'},
          {src: 'dev/js/require.js', dest:'dep/js/require.js'},
          {src: 'dev/js/vendor/custom.modernizr.js', dest:'dep/js/vendor/custom.modernizr.js'}
        ]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['requirejs', 'sass']);
  grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('js', ['requirejs']);
  grunt.registerTask('cp', ['copy']);

  grunt.registerTask('deploy', ['css', 'requirejs', 'copy']);

};