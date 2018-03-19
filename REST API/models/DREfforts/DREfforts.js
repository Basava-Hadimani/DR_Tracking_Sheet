var db=require('../../dbconnection');

var DREfforts={

addDREfforts:function(Task,callback){
    console.log(Task);

    for(let index = 1; index < (Task.PSD.length + 1) ; index++){

      console.log("Entered inside ADDDR_Effort")
        if(Task.PSD[index - 1]){
           db.query(
                  `INSERT INTO dr_effort SET  DR_NAME = (SELECT DR_NAME FROM dr_plan_records WHERE DR_NAME = ${Task.DR_NAME}),TEAM = (SELECT TEAM FROM project_teams WHERE TEAM = '${Task.TEAM}'),Phase = (SELECT Phase FROM dr_phase WHERE ID = ${index}), PSD='${Task.PSD[index - 1]}', PED='${Task.PED[index - 1]}'`
                );
        }

    }
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
updateDREfforts:function(Task,callback){
let index = 0;
  while(index < 11){
      db.query("Update dr_effort SET status=?, resource=?, plannedEE='?'  , actualEE=? ,  comment=?  where DR_NAME=? and TEAM=? and Phase=? ",[Task.Status[index],Task.Resources[index],Task.type[index],Task.ActualEE[index], Task.Comment[index], Task.DR_NAME, Task.TEAM, Task.Phase[index]]);
    index++;
  }
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
getAllDREfforts: function(callback){

return db.query("Select * from dr_effort",callback);

},
getDREffortsById:function(DR_NAME, TEAM,callback){
    return db.query("select * from dr_effort where DR_NAME=? and TEAM=? ",[DR_NAME, TEAM],callback);
},


deleteTask:function(id,callback){
    return db.query("delete from Resources where Id=?",[id], callback);
}
};
module.exports=DREfforts;
