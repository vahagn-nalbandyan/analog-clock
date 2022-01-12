(function () {
    'use strict';
}());
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'files',
                    cssDir: '../css',
                    environment: 'development',
                    outputStyle: 'compressed',
                    require: 'sass-globbing'
                }
            }
        },

        watch: {
            files: ['files/**/*.scss'],
            tasks: ['concat', 'compass']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'compass', 'watch']);
};
