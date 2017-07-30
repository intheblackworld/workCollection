var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'pic';
	
	// Load the galleries by sortOrder
	//view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));
	view.query('galleries', keystone.list('Post').model.find().sort('sortOrder'));
	
	// call for test.swig gallery in galleries

	// Render the view
	view.render('test');
	
};