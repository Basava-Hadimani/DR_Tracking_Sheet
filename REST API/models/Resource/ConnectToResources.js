var Resource=require('./Resources');

var ConnectToResources = {
	
	Connect: function(id, res){
						if(id){

						Resource.getResourceById(id,function(err,rows){
						
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
						
						Resource.getAllResources(function(err,rows){
						
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

module.exports=ConnectToResources;

