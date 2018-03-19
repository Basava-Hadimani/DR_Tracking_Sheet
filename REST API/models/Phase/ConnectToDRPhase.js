var DRPhase=require('./DRPhase');

var ConnectToDRPhase = {
	
	Connect: function(id, res){
						if(id){

								DRPhase.getDRPhaseById(id,function(err,rows){
							
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
							
							DRPhase.getAllDRPhases(function(err,rows){
							
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

module.exports=ConnectToDRPhase;

