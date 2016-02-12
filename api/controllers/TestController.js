/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test:function(req,res){
		console.log(req.allParams());
		console.log(req.file('avatar_1'));
		console.log(req.file('avatar_2')); // null _files when console 
		var upload_params =   {
													user_id: 1,
													image: req.file('avatar_1'),
													type: 'user_image'
							 }
		Upload.upload(upload_params, function(err, image_obj){
			if( err ){
				console.log( err );
			}
			if( !err ){
				console.log( image_obj );
			} 
		});
		var upload_params_2 =   {
													user_id: 2,
													image: req.file('avatar_2'),
													type: 'user_image'
							 }
		Upload.upload(upload_params_2, function(err, image_obj){
			if( err ){
				console.log( err );
			}
			if( !err ){
				console.log( image_obj );
			} 
		});
	}
};

