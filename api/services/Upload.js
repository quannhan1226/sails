module.exports  =  {
	upload: function(params, next){
			var fileInfo = params.image._files[0].stream;
			var file_ext = Helper.getFileExt(fileInfo.filename);
			var file_path = params.user_id + '/' + params.type + '_' + params.user_id +'.' + file_ext;
			params.image.upload({
				saveAs: file_path
			},function (err, files) {
		      if ( err ){
		      	return next(err,null);
		      }
		      if( !err ){
		      	return (null,files);
		      }   

		    });
    }		    
}