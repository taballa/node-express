module.exports = (grunt) ->
    'use strict'
    grunt.initConfig
        path:
            app: './app'
            public: './public'
            views: './views'
        watch:
            options:
                livereload: true
            scripts:
                files: ['<%= path.app %>/scripts/*.coffee']
                tasks: ['coffee']
            styles:
                files: ['<%= path.app %>/sass/*.sass', '<%= path.app %>/sass/*.scss']
                tasks: ['compass']
            views:
                files: ['<%= path.views %>/*.{html,php,ejs,jade}']
            express:
                # files: ['./app.js', './routes/*.js', './lib/*.js', './models/*.js', './test/*.js']
                files: ['./{app,routes,lib,models,test}/*.js', './app.js']
                tasks: ['express:dev']
                options:
                    nospawn: true
        compass:
            dist:
                option:
                    config: 'config.rb'
        coffee:
            glob_to_multiple:
                expand: true
                flatten: true
                cwd: '<%= path.app %>/scripts/'
                src: ['*.coffee']
                dest: '<%= path.app %>/scripts/'
                ext: '.js'
        express:
            options: {
            # Override defaults here
            }
            dev:
                options:
                   script: "./app.js"
            # prod:
            #     options:
            #        script: "app/app.js"
            #        node_env: "production"
            # test:
            #     options:
            #        script: "app/app.js"

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-compass')
    grunt.loadNpmTasks('grunt-express-server')

    grunt.registerTask('default', ['express:dev', 'watch'])


