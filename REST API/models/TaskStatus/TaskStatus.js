var db=require('../../dbconnection');

var TaskStatus={

getAllResources:function(callback){

return db.query("Select * from taskStatus",callback);

}

};
module.exports=TaskStatus;
