var DREfforts=require('./DREfforts');

var ConnectToDREfforts = {

	ConnectToPost: function(req,res,next){

								DREfforts.addDREfforts(req.body,function(err,count){

									if(err)
									{
										res.json(err);
									}
									else{
										res.json(req.body);
									}
								});

	},
	ConnectToPut: function(req,res,next){

								DREfforts.updateDREfforts(req.body,function(err,count){

									if(err)
									{
										res.json(err);
									}
									else{
										res.json(req.body);
									}
								});

	},

	ConnectToGet: function(ID1,ID2, res){
						if(ID1 && ID2){
								DREfforts.getDREffortsById(ID1, ID2,function(err,rows){

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
							DREfforts.getAllDREfforts(function(err,rows){

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

module.exports=ConnectToDREfforts;
