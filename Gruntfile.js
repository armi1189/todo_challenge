module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'public/js/**/*.js', 'test/**/*.js']
    },
    protractor: {
      e2e: {
        options : {
          configFile: 'test/e2e/conf.js',
          keepAlive: true
        }
      },
      debug: {
        options : {
          configFile: 'test/e2e/conf.js',
          keepAlive: true,
          debug: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['jshint', 'karma', 'protractor:e2e']);

};