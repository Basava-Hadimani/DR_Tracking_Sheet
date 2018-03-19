var db=require('../../dbconnection');

var DRPlanRecords={

addDRPlanRecords:function(Task,callback){
  return db.query("Insert into DR_Plan_Records(DR_NAME, TEAM, release_name, manager, plannedEE) values(?, ?,?,?,?)",[Task.DR_NAME, Task.TEAM, Task.release_name, Task.manager, Task.plannedEE],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
updateDRPlanRecords:function(Task,callback){
  console.log(Task);
  return db.query("Update DR_Plan_Records SET validatedEE=?, design_number_of_pages=?, size_in_loc=?  , design_review_defects_internal=? , design_review_defects_external=?  , code_review_efforts_internal=?  , ut_defects=?  , pqa_defects=?, design_review_owner=?, code_review_owner=?, utp_review_owner=?  where DR_NAME=? ",[Task.validatedEE,Task.DesignNoOfPages,Task.SizeInLOC,Task.DesignReviewDefects_Inter,Task.DesignReviewDefects_Exter, Task.CodeReviewEfforts_Inter,Task.UTDefects,Task.PQADefects, Task.DesignReviewOwner,Task.CodeReviewOwner,Task.UTPReviewOwner,Task.DR_NAME],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
getAllDRPlanRecords: function(callback){

return db.query("Select * from DR_Plan_Records",callback);

},
getDRPlanRecordsById:function(DR_NAME, TEAM,callback){
    return db.query("select * from DR_Plan_Records where DR_NAME=? and TEAM=? ",[DR_NAME, TEAM],callback);
},


deleteTask:function(id,callback){
    return db.query("delete from Resources where Id=?",[id], callback);
}
};
module.exports=DRPlanRecords;
