module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify files with uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    //Concatenate js with r.js RequireJS Optimizer
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
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');


  // Default task(s).
  grunt.registerTask('default', ['requirejs', 'sass']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js', ['requirejs']);

};