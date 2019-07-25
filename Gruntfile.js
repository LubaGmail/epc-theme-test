module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    useAvailablePort: true,
                    base: '.',
                    keepalive: false,
                    open: {
                        target: 'http://localhost:8001/html/styleguide.html',
                    }
                }
            }
            //uses_defaults: {}
        },
        // sass: {
        //   dist: {
        //     options: {
        //       style: 'compressed'
        //     },
        //     files: {
        //       'css/main.css': 'css/scss/main.scss',
        //     }
        //   }
        // },
        // LESS
        less: {
             dist: {
                 options: {
                     paths: ["styles/less"],
                     compress: false
                 },
                 files: {"styles/less/CMStheme.css": "styles/less/CMStheme.less"}
             }
         },
        // END LESS


        jshint: {
            files: ['js/*.js'],
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['html/*.html'],
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['jshint'],
            },
            files: "styles/less/*.less",
            tasks: ["less"],
            // sass: {
            //   options: {
            //     // Monitor Sass files for changes and compile them, but don't reload the browser.
            //     livereload: false,
            //   },
            //   files: ['css/scss/**/*.scss'],
            //   tasks: ['sass'],
            // },
            css: {
                // LiveReload on the CSS files instead of their Sass source files and you get
                // the style to refresh without reloading the page in the browser.
                files: ['styles/less/CMStheme.css'],
            },
        },
    });

    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);

};