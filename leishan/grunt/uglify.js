module.exports = {
   
     options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'keystone.js',
        dest: 'keystone.min.js'
      }
     
}
