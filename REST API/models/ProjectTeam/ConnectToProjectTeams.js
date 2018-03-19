var ProjectTeams=require('./ProjectTeams');

var ConnectToProjectTeams = {
	
	Connect: function(id, res){
						if(id){
									ProjectTeams.getProjectTeamById(id,function(err,rows){
								
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
								
								ProjectTeams.getAllProjectTeams(function(err,rows){
								
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

module.exports=ConnectToProjectTeams;

