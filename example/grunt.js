/*global config:true, task:true*/
module.exports = function(grunt) {
    // Grunt utilities.
    var task = grunt.task;
    var file = grunt.file;
    var utils = grunt.utils;
    var log = grunt.log;
    var verbose = grunt.verbose;
    var fail = grunt.fail;
    var option = grunt.option;
    var config = grunt.config;
    var template = grunt.template;

    grunt.initConfig({
        options: {
            testFiles: [
                'js/model/**/*.js',
                'js/collection/**/*.js',
                'js/router/**/*.js',
                'js/view/**/*.js',
                'js/libs/acme/**/*.js'
            ]
        },
        // pkg: '<json:package.json>',
        test: {
            files: ['test/**/*.js']
        },
        watch: {
            // Just for example:
            // testAdmin: {
            //     files: [
            //         '<config:options.testFiles>',
            //         'test/admin/specs/*.js'
            //     ],
            //     tasks: 'mocha'
            // },
            
            // If you want to watch files and run tests automatically on change
            test: {
                files: [ 'js/**/*.js', 'test/spec/**/*.js' ],
                tasks: 'mocha'
            }
        },
        mocha: {
            // runs all html files (except test2.html) in the test dir
            // In this example, there's only one, but you can add as many as
            // you want. You can split them up into different groups here
            // ex: admin: [ 'test/admin.html' ]
            all: [ 'test/**/!(test2).html' ],
            
            // Runs 'test/test2.html' with specified mocha options.
            // This variant does not use explicit inclusion of 'mocha-helper.js' 
            // and demonstrates running of mocha from auto-included 'mocha-helper.js'.
            test2: {
                // Test files
                src: [ 'test/test2.html' ],
                // mocha options
                mocha: {
                    ignoreLeaks: false
                },
                // Indicates whether 'mocha.run()' should be executed in 'mocha-helper.js'
                run: true
            }
        }
    });

    // run `npm install grunt-mocha` in project root dir first
    // grunt.loadNpmTasks('grunt-mocha');
    task.loadTasks('../tasks');

    // Alias 'test' to 'mocha' so you can run `grunt test`
    task.registerTask('test', 'mocha');
    
    // Default task.
    task.registerTask('default', 'mocha');
    
    grunt.loadNpmTasks('grunt-mocha');
};
