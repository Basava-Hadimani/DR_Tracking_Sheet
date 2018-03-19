var DRTypes=require('./DRTypes');

var ConnectToDRTypes = {


	Connect: function(id, res){
						if(id){

								DRTypes.getDRTypesById(id,function(err,rows){

									if(err)
									{
										res.json(err);
									}
									else{
										res.json(rows);
									}
								});

							}
							else{
							DRTypes.getAllDRTypes(function(err,rows){

									if(err)
									{
										res.json(err);
									}
									else
									{
										res.json(rows);
									}

								});
							}



	}


}

module.exports=ConnectToDRTypes;
