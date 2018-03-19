var DRPlanRecords=require('./DRPlanRecord');

var ConnectToDRPlanRecords = {

	ConnectToPost: function(req,res,next){

								DRPlanRecords.addDRPlanRecords(req.body,function(err,count){

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

								DRPlanRecords.updateDRPlanRecords(req.body,function(err,count){

									if(err)
									{
										res.json(err);
									}
									else{
										res.json(req.body);
									}
								});

	},

	ConnectToGet: function(DR_NAME, TEAM, res){
						if(DR_NAME && TEAM){

								DRPlanRecords.getDRPlanRecordsById(DR_NAME, TEAM,function(err,rows){

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
							DRPlanRecords.getAllDRPlanRecords(function(err,rows){

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

module.exports=ConnectToDRPlanRecords;
