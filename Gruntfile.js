module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				compress: true,
				report: true
			},
			app: {
				files: {
					'public/js/app.min.js': [
						'public/js/init.js',
						'public/js/map.js',
						'public/js/slider.js',
						'public/js/navigation.js',
						'public/js/main.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);

};