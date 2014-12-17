'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },

            compass: {
                files: '<%= yeoman.app %>/styles/{,*/}*.{scss,sass}',
                tasks: ['compass']
            },

            compassHome: {
                files: '<%= yeoman.app %>/elements/home/home.scss',
                tasks: ['compass:home']
            },
            compassCommunication: {
                files: '<%= yeoman.app %>/elements/communication/communication.scss',
                tasks: ['compass:communication']
            },
            compassClinical: {
                files: '<%= yeoman.app %>/elements/clinical/clinical.scss',
                tasks: ['compass:clinical']
            },
            compassQuality: {
                files: '<%= yeoman.app %>/elements/quality/quality.scss',
                tasks: ['compass:quality']
            },
            compassDiscovery: {
                files: '<%= yeoman.app %>/elements/discovery/discovery.scss',
                tasks: ['compass:discovery']
            },
            compassTeaching: {
                files: '<%= yeoman.app %>/elements/teaching/teaching.scss',
                tasks: ['compass:teaching']
            },
            compassData: {
                files: '<%= yeoman.app %>/elements/data/data.scss',
                tasks: ['compass:data']
            },
            compassPeople: {
                files: '<%= yeoman.app %>/elements/people/people.scss',
                tasks: ['compass:people']
            },
            compassContact: {
                files: '<%= yeoman.app %>/elements/contact/contact.scss',
                tasks: ['compass:contact']
            },
            compassPages: {
                files: '<%= yeoman.app %>/elements/page/page.scss',
                tasks: ['compass:home',
			'compass:communication',
			'compass:clinical',
			'compass:quality',
			'compass:discovery',
			'compass:teaching',
			'compass:data']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '<%= yeoman.app %>/elements/**/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
		cors: true,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
			middleware: function(connect){
					return [

			    lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app),
			    function(req, res, next) {
				    res.setHeader('Access-Control-Allow-Origin', '*');
				    res.setHeader('Access-Control-Allow-Methods', '*');
				    next();
		            }

				    ]
			}

                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir:'<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            },
            home:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/home',
                  cssDir: '.tmp/elements/home',
              }
            },
            communication:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/communication',
                  cssDir: '.tmp/elements/communication',
              }
            },
            clinical:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/clinical',
                  cssDir: '.tmp/elements/clinical',
              }
            },
            quality:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/quality',
                  cssDir: '.tmp/elements/quality',
              }
            },
            discovery:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/discovery',
                  cssDir: '.tmp/elements/discovery',
              }
            },
            teaching:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/teaching',
                  cssDir: '.tmp/elements/teaching',
              }
            },
            data:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/data',
                  cssDir: '.tmp/elements/data',
              }
            },
            contact:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/contact',
                  cssDir: '.tmp/elements/contact',
              }
            },
            people:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/people',
                  cssDir: '.tmp/elements/people',
              }
            }
        },

        useminPrepare: {
            src: ['<%= yeoman.app %>/index.html'],
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html','<%= yeoman.dist %>/elements/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,svg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            },
            home: {
                files: {
                    '<%= yeoman.dist %>/elements/home/home.css': '.tmp/elements/home/home.css'
                }
            },
            communication: {
                files: {
                    '<%= yeoman.dist %>/elements/communication/communication.css': '.tmp/elements/communication/communication.css'
                }
            },
            clinical: {
                files: {
                    '<%= yeoman.dist %>/elements/clinical/clinical.css': '.tmp/elements/clinical/clinical.css'
                }
            },
            quality: {
                files: {
                    '<%= yeoman.dist %>/elements/quality/quality.css': '.tmp/elements/quality/quality.css'
                }
            },
            discovery: {
                files: {
                    '<%= yeoman.dist %>/elements/discovery/discovery.css': '.tmp/elements/discovery/discovery.css'
                }
            },
            teaching: {
                files: {
                    '<%= yeoman.dist %>/elements/teaching/teaching.css': '.tmp/elements/teaching/teaching.css'
                }
            },
            data: {
                files: {
                    '<%= yeoman.dist %>/elements/data/data.css': '.tmp/elements/data/data.css'
                }
            },
            people: {
                files: {
                    '<%= yeoman.dist %>/elements/people/people.css': '.tmp/elements/people/people.css'
                }
            },
            contact: {
                files: {
                    '<%= yeoman.dist %>/elements/contact/contact.css': '.tmp/elements/contact/contact.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            },
            elements: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/elements',
                  src: '{,*/}*.html',
                    dest: '<%= yeoman.dist %>/elements/'
                }]
            },
        },
          concat: {
    options: {
      separator: ';',
    },
    dist:{},
    preload:{
      head: {
          src: ['<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
                '<%= yeoman.app %>/bower_components/webcomponentsjs/webcomponents.js'],
          dest: '<%= yeoman.dist %>/scripts/preload.js',
      }
    },
    postload:{
      options: {
          src: ['<%= yeoman.app %>/bower_components/jquery/jquery.min.js',
                '<%= yeoman.app %>/sass-bootstrap/js/affix.js',
                '<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel/owl.carousel.min.js',
                '<%= yeoman.app %>/sass-bootstrap/js/collapse.js'],
          dest: '<%= yeoman.dist %>/scripts/postload.js',
      }
    }
  },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'lib-elements/**',
                        'images/{,*/}*.{webp,gif,svg}'
                    ]
                }]
            },
                  cssAsScss: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel/',
            src: '**/*.css',
            dest: '<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel',
            filter: 'isFile',
            ext: ".scss",
            extDot: "last"
          }
        ]
      },
            webcomponents: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/',
                    dest: '<%= yeoman.app %>/lib-elements',
                    src: [
                        'polymer/**',
                        'flatiron-director/**',
                        "polymer/polymer.html",
                        "core-icon/**",
                        "paper-focusable/**",
                        "paper-ripple/**",
                        "paper-shadow/**",
                        "paper-dialog/**",
                        "paper-button/**",
                        "paper-tabs/**",
                        "core-transition/**",
                        "core-overlay/**",
                        "core-iconset/**",
                        "core-icons/**",
                        "core-icon-button/**",
                        "core-meta/**",
                        "core-toolbar/**",
                        "core-selector/**",
                        "core-animated-pages/**",
                        "core-style/**",
                        "core-selection/**",
                        'polymer-jsonp/**'
                    ]
                }]
            }

        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });


    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            //
            'copy:webcomponents',
            'copy:cssAsScss',
            'compass:server',
            'compass:home',
            'compass:communication',
            'compass:clinical',
            'compass:quality',
            'compass:discovery',
            'compass:teaching',
            'compass:data',
            'compass:people',
            'compass:contact',
            'connect:livereload',
            // 'copy',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'compass',
        'connect:test',
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        //
        'copy:webcomponents',
        'copy:cssAsScss',
        // compile css for all pages
        'compass:dist',
        'compass:home',
        'compass:communication',
        'compass:clinical',
        'compass:quality',
        'compass:discovery',
        'compass:teaching',
        'compass:data',
        'compass:people',
        'compass:contact',
        // prepare files (replace <!-- build:js scripts/postload.js --> tags)
        'useminPrepare',
        // prepare images
        'imagemin',
        // compile html for all pages
        'htmlmin',
        'htmlmin:elements',
        // concat whatever needs to be
        'concat',
        'concat:preload',
        'concat:postload',
        // minify css
        'cssmin',
        'cssmin:home',
        'cssmin:communication',
        'cssmin:clinical',
        'cssmin:quality',
        'cssmin:discovery',
        'cssmin:teaching',
        'cssmin:data',
        'cssmin:people',
        'cssmin:contact',
        // minify JS
        'uglify',
        // move last files over
        'copy',
        // IDK yet
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
