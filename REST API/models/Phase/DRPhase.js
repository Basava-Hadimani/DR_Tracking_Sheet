var db=require('../../dbconnection');

var DRPhase={

getAllDRPhases:function(callback){

return db.query("Select * from DR_phase order by ID",callback);

},
getDRPhaseById:function(id,callback){

    return db.query("select * from DR_phase where ID=? ",[id],callback);
},



addTask:function(Task,callback){
   console.log("inside service");
   //console.log(Task.Id);
return db.query("Insert into Resources(Name) values(?)",[Task.Name],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteTask:function(id,callback){
    return db.query("delete from Resources where Id=?",[id], callback);
}
};
module.exports=DRPhase;
