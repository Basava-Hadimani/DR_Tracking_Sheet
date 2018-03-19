var TaskStatus=require('./TaskStatus');

var ConnectToTaskStatus = {

	Connect: function(id, res){
						if(id){

						TaskStatus.getResourceById(id,function(err,rows){

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

						TaskStatus.getAllResources(function(err,rows){

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

module.exports=ConnectToTaskStatus;
