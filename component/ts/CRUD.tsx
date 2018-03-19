var axios = require('axios');

export function GET(path){
        return axios.get(path, {
        	responseType: 'json'
        })
}

export function GET_ID(path, ID1, ID2 ){
        return axios.get(path+ID1+"/"+ID2+"/", {
          responseType: 'json'
        })
}

export function POST(...obj){
  if(obj[0] === window['DRPlanRecords']){
			axios.post(obj[0], { DR_NAME : obj[3], TEAM : obj[1], release_name : obj[2], manager : obj[4], plannedEE : obj[5]})
			.then(function(response){
				console.log('saved successfully')
			})
    }else if(obj[0] === window['DREfforts']){
      axios.post(obj[0], { DR_NAME : obj[2], TEAM : obj[1], PSD : obj[3], PED : obj[4]})
			.then(function(response){
				console.log('saved successfully')
			})
    }
}

export function PUT(...obj){
  if(obj[0] === window['DRPlanRecords']){
			axios.put(obj[0], {validatedEE : obj[1].ValidatedPlannedE,DesignNoOfPages : obj[1].DesignNoOfPages, SizeInLOC : obj[1].SizeInLOC, DesignReviewDefects_Inter : obj[1].DesignReviewDefects_Inter, DesignReviewDefects_Exter: obj[1].DesignReviewDefects_Exter,CodeReviewEfforts_Inter : obj[1].CodeReviewEfforts_Inter, UTDefects: obj[1].UTDefects, PQADefects : obj[1].PQADefects, DesignReviewOwner : obj[1].DesignReviewOwner, CodeReviewOwner : obj[1].CodeReviewOwner, UTPReviewOwner  : obj[1].UTPReviewOwner  , DR_NAME : obj[2] })
			.then(function(response){
				console.log('saved successfully')
			})
    }else if(obj[0] === window['DREfforts']){
      axios.put(obj[0], {DR_NAME : obj[1],TEAM : obj[2], Phase :obj[3], Resources : obj[4], Status : obj[5], Comment: obj[6], ActualEE : obj[7], type:obj[8]})
			.then(function(response){
				console.log('saved successfully')
			})
    }

}
