var express = require('express');
var router = express.Router();
var ConnectToResources=require('../models/Resource/ConnectToResources');
var ConnectToProjectTeams=require('../models/ProjectTeam/ConnectToProjectTeams');
var ConnectToDRPhase=require('../models/Phase/ConnectToDRPhase');
var ConnectToDRPlanRecord=require('../models/DRPlanRecords/ConnectToDRPlanRecord');
var ConnectToDRTypes=require('../models/DRTypes/ConnectToDRTypes')
var ConnectToDREfforts=require('../models/DREfforts/ConnectToDREfforts')
var ConnectToTaskStatus= require('../models/TaskStatus/ConnectToTaskStatus')
router.get('/:path/:id1?/:id2?',function(req,res,next){


switch(req.params.path){

		case 'Resources' :

							ConnectToResources.Connect(req.params.id1, res);
							break;

		case 'ProjectTeams':
							ConnectToProjectTeams.Connect(req.params.id1, res);
							break;

		case 'DRPhase' :
							ConnectToDRPhase.Connect(req.params.id1, res);
							break;

		case 'DRPlanRecords' :
							ConnectToDRPlanRecord.ConnectToGet(req.params.id1, req.params.id2,res);
							break;

		case 'DRTypes':
								ConnectToDRTypes.Connect(req.params.id1, res);
								break;
		case 'DREfforts' :
									ConnectToDREfforts.ConnectToGet(req.params.id1,req.params.id2, res);
									break;
	 case 'status':
								ConnectToTaskStatus.Connect(req.params.id1, res);
								break;
		default :
							console.log("ERROR!, URL Undefined");
							res.json("Error in URL, Please check again")
							break;

	}


});




router.post('/:path/:id?',function(req,res,next){

	switch(req.params.path){

		case 'DRPlanRecords' :
							ConnectToDRPlanRecord.ConnectToPost(req,res,next);
							break;

		case 'DREfforts'	:
							ConnectToDREfforts.ConnectToPost(req, res, next);
							break;

	}

});

router.put('/:path/:id?',function(req,res,next){


	switch(req.params.path){

		case 'DRPlanRecords' :
							ConnectToDRPlanRecord.ConnectToPut(req,res,next);
							break;
	 case 'DREfforts' :
							ConnectToDREfforts.ConnectToPut(req,res,next);
							break;

	}

  /*  Task.updateTask(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });*/
});

router.delete('/:id',function(req,res,next){

        Task.deleteTask(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});

module.exports=router;
