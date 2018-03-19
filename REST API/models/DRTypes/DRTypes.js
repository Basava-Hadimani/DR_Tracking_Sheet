var db=require('../../dbconnection');

var DRPlanRecords={


getAllDRTypes: function(callback){
return db.query("Select * from DR_Type",callback);
},
getDRTypesById:function(id,callback){
    return db.query("select * from DR_Type where ID=?",[id],callback);
}
};
module.exports=DRPlanRecords;
