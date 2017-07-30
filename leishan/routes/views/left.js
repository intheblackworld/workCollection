var keystone = require('keystone');
var async = require('async');
var Enquiry = keystone.list('Enquiry');
require('dotenv').load();
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    var locals = res.locals;
    
    // Init locals
    locals.section = 'blog';
    locals.filters = {
        category: req.params.category
    };
    locals.data = {
        posts: [],
        categories: [],
        logo: [],
        activity:[]

    };

        // locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
    locals.formData = req.body || {};
    locals.validationErrors = {};
    locals.enquirySubmitted = false;
    

    // Load all categories
    view.on('init', function(next) {
        
        keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {
            
            if (err || !results.length) {
                return next(err);
            }
            
            locals.data.categories = results;
            
            // Load the counts for each category
            async.each(locals.data.categories, function(category, next) {
                
                keystone.list('Post').model.count().where('categories').in([category.id]).exec(function(err, count) {
                    category.postCount = count;
                    

                    
                    next(err);
                });
                
            }, function(err) {
                next(err);
            });
            
        });
        
    });
    
    // Load the current category filter
    view.on('init', function(next) {
        
        if (req.params.category) {
            keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function(err, result) {
                locals.data.category = result;
                
                next(err);
            });
        } else {
            next();
        }
        
    });
    
    // Load the posts
    view.on('init', function(next) {
        
        var q = keystone.list('Post').paginate({
                page: req.query.page || 1,
                perPage: 10,
                maxPages: 10
            })
            .where('state', 'published')
            .sort('-publishedDate')
            .populate('author categories');
        
        if (locals.data.category) {
            q.where('categories').in([locals.data.category]);
        }
        
        q.exec(function(err, results) {
            locals.data.posts = results;
            


            next(err);
        });
        
    });




view.on('init', function(next) {
var keystone = require('keystone'),
    Post = keystone.list('Post');
 
Post.model.find()
    .where('state', 'published')
    .populate('author categories')
    .populate('categories',null,{name:{$in:['代理保險公司']}})
    .sort({'_id':-1})
    

//   .where('categories').elemMatch(function (elem) {
//   elem.where('name', 'category1');
  
// })
    .exec(function(err, posts) {
        // do something with posts
            posts = posts.filter(function(post){
     return post.categories.length;
   })


        locals.data.logo = posts;
       
        
        next(err);
    
    });
    });


view.on('init', function(next) {
var keystone = require('keystone'),
    Post = keystone.list('Post');
 
Post.model.find()
    .where('state', 'published')
    .populate('author categories')
    .populate('categories',null,{name:{$in:['磊山講堂']}})
    .sort({'_id':-1})
    

//   .where('categories').elemMatch(function (elem) {
//   elem.where('name', 'category1');
  
// })
    .exec(function(err, posts) {
        // do something with posts
            posts = posts.filter(function(post){
     return post.categories.length;
   })


        locals.data.activity = posts;
      
        
        next(err);
    
    });
    });



    view.on('post', { action: 'contact' }, function(next) {
        
        var newEnquiry = new Enquiry.model(),
            updater = newEnquiry.getUpdateHandler(req);
        
        updater.process(req.body, {
            flashErrors: true,
            fields: 'name, email, phone, address,title, message',
            errorMessage: 'There was a problem submitting your enquiry:'
        }, function(err) {
            if (err) {
                locals.validationErrors = err.errors;
            } else {
                locals.enquirySubmitted = true;

                        console.log('email send ok');

//                      server = require("emailjs/email").server.connect({

//  host        : 'smtp.mandrillapp.com',
//  user        : process.env.email,
//  password    : process.env.emailpwd,
//  sender      : 'web notice',
//  port : 587


// });

//  server.send({
//      from         : '',
//      to           : process.env.noticemail,
//      subject      : 'Web notice mail',
//      text         : 'check the comment content'
//  });

            }
            next();
        });
        
    });



    //
    view.render('left');
    
};