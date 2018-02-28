module.exports = function (grunt) {
  	grunt.initConfig({
		cssmin: {
			bundle_css: {
				files: {
				      'assets/build/css/bundle.min.css': [
                          "node_modules/bootstrap/dist/css/bootstrap.min.css",
                          "node_modules/fullpage.js/dist/jquery.fullpage.min.css",
                          "assets/css/common.css",
                          "assets/css/header.css",
                          "assets/css/sections/home.css",
                          "assets/css/sections/statistics.css",
                          "assets/css/sections/competitors.css",
                          "assets/css/sections/notifications.css",
                          "assets/css/sections/affiliate-program.css",
                          "assets/css/sections/payments.css",
                          "assets/css/sections/multilanguage.css",
                          "assets/css/sections/api.css"
				      ]
				}
			}
	  	},
        autoprefixer: {
            autoprefixGrutedCss: {
                src: ['assets/build/css/bundle.min.css'],
                dest: 'assets/build/css/bundle.min.css'
            },
        },
	  	uglify: {
		    bundle_js: {
		      files: {
		        'assets/build/js/bundle.min.js': [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
                    "node_modules/fullpage.js/dist/jquery.fullpage.min.js",
                    "node_modules/chart.js/dist/Chart.bundle.min.js",
                    "assets/js/common.js",
                    "assets/js/sections/statistics.js"
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