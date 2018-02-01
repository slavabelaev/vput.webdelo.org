module.exports = function (grunt) {
  	grunt.initConfig({
		cssmin: {
			bundle_css: {
				files: {
				      'assets/css/dist/bundle.min.css': [
                          "node_modules/bootstrap/dist/css/bootstrap.min.css",
                          "assets/css/common.css",
                          "assets/css/animations.css",
                          "assets/css/sections/preloader.css",
                          "assets/css/sections/project.css",
                          "assets/css/sections/how-do-we-work--evaluation.css",
                          "assets/css/sections/how-do-we-work--start-development.css",
                          "assets/css/sections/how-do-we-work--deployment-and-support.css",
                          "assets/css/sections/how-do-we-work--restful-api.css",
                          "assets/css/sections/how-do-we-work--projection.css",
                          "assets/css/sections/technologies.css",
                          "assets/css/sections/who-we-are.css",
                          "assets/css/sections/contacts.css",
                          "assets/css/diagrams/common-evaluation.css",
                          "assets/css/diagrams/deployment.css",
                          "assets/css/diagrams/development-process.css",
                          "assets/css/diagrams/project-process.css"
				      ]
				}
			}
	  	},
        autoprefixer: {
            autoprefixGrutedCss: {
                src: ['assets/css/dist/bundle.min.css'],
                dest: 'assets/css/dist/bundle.min.css'
            },
        },
	  	uglify: {
		    bundle_js: {
		      files: {
		        'assets/js/dist/bundle.min.js': [
                    "node_modules/jquery/dist/jquery.min.js",
                    "assets/js/jquery.easeScroll.js",
                    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
                    "node_modules/snapsvg/dist/snap.svg-min.js",
                    "node_modules/countup.js/dist/countUp.min.js",
                    "node_modules/countup.js/countUp-jquery.js",
                    "node_modules/typeit/dist/typeit.min.js",
                    "node_modules/gsap/src/uncompressed/TweenMax.js",
                    "node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
                    "node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js",
                    "node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
                    "node_modules/particles.js/particles.js",
                    "node_modules/in-view/dist/in-view.min.js",
                    "node_modules/reading-position-indicator/dist/rpi.bundle.js",
                    "node_modules/bowser/bowser.min.js",
                    "assets/js/app.js",
                    "node_modules/bodymovin/build/player/bodymovin.js",
                    "assets/js/preloader.class.js",
                    "assets/js/sections/preloader/initialize.js",
                    "assets/js/diagrams/common-evaluation.js",
                    "assets/js/sections/how-do-we-work--evaluation/initialize.js",
                    "assets/js/diagrams/project-process.js",
                    "assets/js/sections/how-do-we-work--projection/initialize.js",
                    "assets/js/diagrams/deployment.js",
                    "assets/js/sections/how-do-we-work--deployment-and-support/initialize.js",
                    "assets/js/diagrams/development-process.js",
                    "assets/js/sections/how-do-we-work--start-development/initialize.js",
                    "assets/js/diagrams/restfull.js",
                    "assets/js/sections/footer/initialize.js",
                    "assets/js/diagrams/technologies.js"
		        ]
		      }
		    }
	  	}
  	});
    
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
  	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('css', ['cssmin', 'autoprefixer']);
    grunt.registerTask('js', ['uglify']);

  	grunt.registerTask('default', ['css', 'js']);
};