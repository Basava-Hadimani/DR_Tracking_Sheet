import * as React from 'react';
const styles = require('../styles/table.scss');
import {GET, POST, PUT, GET_ID} from './CRUD.tsx';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

interface MyComponentProps { match : any}
interface MyComponentState { ValidatedPlannedEE :  string,
                             DesignNoOfPages :  string,
                             SizeInLOC :  string,
                             DesignReviewDefects_Inter :  string,
                             DesignReviewDefects_Exter :  string,
                             CodeReviewEfforts_Inter :  string,
                             PQADefects :  string,
                             CodeReviewOwner :  string,
                             DesignReviewOwner :  string,
                             UTPReviewOwner :  string,
                             UTDefects :  string,
                            }

export class UpdateSummary extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props){
    super(props);
    this.state={
      ValidatedPlannedEE : '',
      DesignNoOfPages : '',
      SizeInLOC : '',
      DesignReviewDefects_Inter : '',
      DesignReviewDefects_Exter : '',
      CodeReviewEfforts_Inter : '',
      PQADefects : '',
      CodeReviewOwner : '',
      DesignReviewOwner : '',
      UTPReviewOwner : '',
      UTDefects : ''

    }

  }


  save = () =>{
    PUT(window['DRPlanRecords'], this.state, this.props.match.params.DR_NAME);
  }

  eventPropagate = (e) =>{
                        this.setState({[e.target.id] : e.target.value});
  }

  componentWillMount () {
    window['DRPlanRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPlanRecords/';
  };

  componentDidMount(){
    GET_ID(window['DRPlanRecords'],this.props.match.params.DR_NAME, this.props.match.params.TEAM  ).then((response)=> {
      console.log(response.data[0].design_number_of_pages);

      this.setState({
        ValidatedPlannedEE : response.data[0].validatedEE,
        DesignNoOfPages : response.data[0].design_number_of_pages,
        SizeInLOC : response.data[0].size_in_loc,
        DesignReviewDefects_Inter : response.data[0].design_review_defects_internal,
        DesignReviewDefects_Exter : response.data[0].design_review_defects_external,
        CodeReviewEfforts_Inter : response.data[0].code_review_efforts_internal,
        PQADefects : response.data[0].pqa_defects,
        CodeReviewOwner : response.data[0].code_review_owner,
        DesignReviewOwner : response.data[0].design_review_owner,
        UTPReviewOwner : response.data[0].utp_review_owner,
        UTDefects : response.data[0].ut_defects
      });

    }
    );
  }

   render() {
      return (
        <div id="UpdateSummery" onChange={(e) => {this.eventPropagate(e)}}>
        <div className="container">
        <div className="row">
          <p className="detail col-12"><em>Summary Update</em></p>
          <div className="detail col-xs-12 col-sm-4  ProjectDetail">DR Number : {this.props.match.params.DR_NAME}</div>
          <div className="detail col-xs-12 col-sm-4 ProjectDetail">Release Name : {this.props.match.params.release_name}</div>
          <div className="detail col-xs-12 col-sm-4  ProjectDetail">Team : {this.props.match.params.TEAM}</div>
        </div>
        </div>

        <div className="container">
        <div className="row">
        < hr />
        <div className="form-group col-xs-12 col-sm-6 col-xl-3">

        <label className="control-label">Validated planned EE:</label>
        <input type="text" id="ValidatedPlannedEE" value={this.state.ValidatedPlannedEE} className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Design No of Pages:</label>
        <input type="text"  id="DesignNoOfPages" value={this.state.DesignNoOfPages}  className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Size in LOC:</label>
        <input type="text" id="SizeInLOC" value={this.state.SizeInLOC} className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Design Review Defects (Inter):</label>
        <input type="text" id="DesignReviewDefects_Inter" value={this.state.DesignReviewDefects_Inter}  className="form-control" />
        </div>

        </div>
        </div>

        <div className="container">
        <div className="row">

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Design Review Defects (Exter):</label>
        <input type="text" id="DesignReviewDefects_Exter" value={this.state.DesignReviewDefects_Exter}   className="form-control"/>
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Code Review Defects (Inter):</label>
        <input type="text" id="CodeReviewEfforts_Inter" value={this.state.CodeReviewEfforts_Inter}  className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">UT Defects:</label>
        <input type="text" id="UTDefects" value={this.state.UTDefects}   className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">PQA Defects:</label>
        <input type="text" id="PQADefects" value={this.state.PQADefects}   className="form-control" />
        </div>

        </div>
        </div>

        <div className="container">
        <div className="row">


        <div className="form-group col-xs-12 col-sm-12 col-lg-4">
        <label className="control-label">UTP Review Owner:</label>
        <input type="text" id="UTPReviewOwner" value={this.state.UTPReviewOwner}  className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-12 col-lg-4">
        <label className="control-label">Design Review Owner:</label>
        <input type="text" id="DesignReviewOwner" value={this.state.DesignReviewOwner}  className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-12 col-lg-4">
        <label className="control-label">Code Review Owner:</label>
        <input type="text" id="CodeReviewOwner" value={this.state.CodeReviewOwner}  className="form-control" />
        </div>

        </div>
        </div>

        <div className="container">
        <div className="row">

        <div className="form-group col-4">
        </div>

        <div className="form-group col-4">
        <input type="button" id="submitSummary" className="form-control btn btn-info" value='Submit' onClick={()=>this.save()}></input>
        </div>

        <div className="form-group col-4">
        </div>
        </div>
        </div>
        < hr />
        </div>

      );
   }
}


interface MyComponentStateForUpdateEffort { options :  any,
                                            phase : any,
                                            type : boolean,
                                            AddEffort : number,
                                            status : any


                            }

export class UpdateEffort extends React.Component<MyComponentProps, MyComponentStateForUpdateEffort>{
  constructor(props){
    super(props);
    this.state = {
      options : '',
      phase : '',
      type : true,
      AddEffort : 0,
      status : ''
    }
  }
  Resources : string[] =[];
  Phases : string[] = [];
  Normal : number[] = [];
  Porting : number[] = [];
  array:number[] = [];
  totalEffort : number = 0;
  plannedEE : number = 0;
  Status : string[] = [];
  storeResources : string[] =[];
  storeActualEffort : string[] =[];
  storeStatus : string[] =[];
  storeComments : string[] =[];
  Data : any[] =[];


  componentWillMount () {
  window['DRPhaseRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPhase';
  window['DRTypes'] = 'http://localhost:3000/ConnectionConfigFile/DRTypes';
  window['DRPlanRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPlanRecords/';
  window['status'] = 'http://localhost:3000/ConnectionConfigFile/status/';
  window['DREfforts'] = 'http://localhost:3000/ConnectionConfigFile/DREfforts';
  };



  store =(e, index)=>{
    switch(e.target.className){

      case 'Status' :this.storeStatus[index] = e.target.value;
                         break;
      case 'Resource' : this.storeResources[index] = e.target.value;
                        break;
      case 'Comments' : this.storeComments[index] = e.target.value;
                        break;
    }
  }

  UpdateTotalEffort = (e, index) =>{
    this.array[index] = Number(e.target.value);

    let _totalEffort = this.array.filter((current, index)=>{
        return (current);
    })

     let total = _totalEffort.reduce((Acc_totalEffort, current, index)=>{
        return Acc_totalEffort + current;
    }, 0);
    this.setState({AddEffort : total})

    this.storeActualEffort[index] = e.target.value;
  }


  _renderObject(){
    GET_ID(window['DRPlanRecords'],this.props.match.params.DR_NAME, this.props.match.params.TEAM).then((response)=> {
      this.plannedEE = response.data[0].plannedEE;
      console.log(this.plannedEE)
    })
    GET(window['DRPhaseRecords'] ).then((response)=> {
      response.data.map((res, index)=>{
      this.Phases[index] = res.Phase;
        })
    })
    GET(window['DRTypes'] ).then((response)=> {
      response.data.map((item, index)=>{

        this.Normal[index] = Number(item.Normal) * this.plannedEE / 100;
        this.Porting[index] = Number(item.Porting) * this.plannedEE / 100;
      })
    })

      return this.Phases.map((item, index) =>{
          return(
            <div  className="table_row" key={index}>

                    <div className='table_small'>
                    <div className="table_cell" >	<p>PHASE</p></div>
                    <div className="table_cell" >	{item}</div>
                    </div>

                    {item == 'Total Effort'?
                    <div className='table_small'>
                    <div className="table_cell" >
                    <div className="table_cell" >
                    </div>
                    </div>
                    </div>
                    :
                    <div className='table_small'>
                    <div className="table_cell" >	<p>STATUS</p></div>
                    <div className="table_cell" >	<select id="inputTable" className="Status" value={this.Data[`data`][index].status} onChange={(e)=>this.store(e, index)}>
                                                  <option value="">Select the status</option>
                                                  {this.state.status}
                                                  </select></div>
                    </div>
                  }
                  {item == 'Total Effort'?
                  <div className='table_small'>
                  <div className="table_cell" >
                  <div className="table_cell" >
                  </div>
                  </div>
                  </div>
                  :

                    <div className='table_small'>
                    <div className="table_cell" >	<p>RESOURCE</p></div>
                    <div className="table_cell" >	          <select  className="Resource" value={this.Data[`data`][index].resource} onChange={(e)=>this.store(e, index)}>
                                                            <option value="" >Select Resources</option>
                                                            {this.state.options}
                                                            </select></div>
                    </div>

                  }
                    <div className='table_small'>
                    <div className="table_cell" >	<p>Planned Efforts</p></div>
                    <div className="table_cell" >	<input id="inputTable"  className="PlannedEE" type="text" value={this.state.type?this.Normal[index]:this.Porting[index]} disabled></input></div>
                    </div>

                    {item == 'Total Effort'?
                    <div className='table_small'>
                    <div className="table_cell" ><p>Actual Efforts</p></div>
                    <div className="table_cell" ><input id="inputTable" type="text" value={this.state.AddEffort} disabled></input></div>
                    </div>
                    :

                    <div className='table_small'>
                    <div className="table_cell" >	<p>Actual Efforts</p></div>
                    <div className="table_cell" >	<input id="inputTable" type="number" value={this.Data[`data`][index].actualEE} onChange={(e) =>{this.UpdateTotalEffort(e, index)}}   ></input></div>
                    </div>
                  }
                  {item == 'Total Effort'?
                  <div className='table_small'>
                  <div className="table_cell" ></div>
                  <div className="table_cell" ></div>
                  </div>

                  :
                  <div className='table_small'>
                  <div className="table_cell" >	<p>Comments</p></div>
                  <div className="table_cell" >	<input id="inputTable" value={this.Data[`data`][index].comment} className="Comments" type="text" onChange={(e) =>{this.store(e, index)}}></input></div>
                  </div>
                }
                    </div>

        )
        })
  	}

  componentDidMount(){

    GET(window['DREfforts']).then((response) =>{
      this.Data = response ;
      console.log("Data");
      console.log(this.Data[`data`]);
    })

    GET(window['ResourcesDatabase']).then((response)=> {
      response.data.map((res, index)=>{
        this.Resources[index] = res.Name;
      })
   const temp_options = this.Resources.map((item, index) =>(<option key={index} value={item}>{item}</option>));

   this.setState({options:temp_options});
    })

    GET(window['status']).then((response)=> {
      response.data.map((res, index)=>{
        this.Status[index] = res.status;
      })
   const temp_options = this.Status.map((item, index) =>(<option key={index} value={item}>{item}</option>));

   this.setState({status:temp_options});
    })
  };

  changeType = ((e) =>{
    this.setState({type : !this.state.type})
  })


  save = () =>{

    if(this.state.type){
    PUT(window['DREfforts'], this.props.match.params.DR_NAME,this.props.match.params.TEAM,this.Phases, this.storeResources, this.storeStatus, this.storeComments, this.storeActualEffort, this.Normal)
  }else{
    PUT(window['DREfforts'], this.props.match.params.DR_NAME,this.props.match.params.TEAM,this.Phases, this.storeResources, this.storeStatus, this.storeComments, this.storeActualEffort, this.Porting)
  }

  }

      render(){
            console.log(this.state);
        return(
        <div id="UpdateEffort" >
        <div className="container">
        <div className="row">
          <p className="detail col-12"><em>Effort Update</em></p>
          <div className="detail col-4 ProjectDetail">DR Number : {this.props.match.params.DR_NAME}</div>
          <div className="detail col-4 ProjectDetail">Release Name : {this.props.match.params.release_name}</div>
          <div className="detail col-4 ProjectDetail">Team : {this.props.match.params.TEAM}</div>
        </div>
        </div>
        <div className="container">
        <div className="row">
        <select id="DR_Type" onChange={(e)=>{this.changeType(e)}} className="col-2">
          <option value="Normal">Normal</option>
          <option value="Porting">Porting</option>
        </select>
        </div>
        </div>


        <div className="container">
        <div className = "row">
        <div className="table" id="results">
				<div className="theader">
				<div className="table_header">
					<p>PHASE</p>
				</div>
				<div className="table_header">
					<p>STATUS</p>
				</div>
				<div className="table_header">
					<p>RESOURCE </p>
				</div>
        <div className="table_header">
          <p>Planned Efforts </p>
        </div>
        <div className="table_header">
          <p>Actual Efforts</p>
        </div>
        <div className="table_header">
          <p>Comments</p>
        </div>

        </div>
        {this._renderObject()}

        </div>
        </div>
        </div>

        <div className="container">
        <div className="row">
        <div className="form-group col-4"></div>
        <div className="form-group col-4">
        <input type="button" id="submitEE" className="form-control btn btn-info" value='Submit' onClick={()=>this.save()}></input>
        </div>
        <div className="form-group col-4"></div>
        </div>
        </div>

        </div>
      );
    }
  }


  interface MyComponentProps {match : any}
  interface MyComponentState {}

export class View extends React.Component<MyComponentProps, MyComponentState>{
  constructor(props){
    super(props);
  }


    SummeryData : string[] = [];
    EffortData : string[] = [];

    componentWillMount(){
      window['DRPlanRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPlanRecords/';
      window['DREfforts'] = 'http://localhost:3000/ConnectionConfigFile/DREfforts/';
    }

    componentDidMount(){
      GET_ID(window['DRPlanRecords'], this.props.match.params.DR_NAME,this.props.match.params.TEAM).then((response) =>{
        console.log(response);
      })
      GET_ID(window['DREfforts'], this.props.match.params.DR_NAME,this.props.match.params.TEAM).then((response) =>{
        console.log(response);
      })
    }

    render(){
      return (
      <div>
      <Router>
      <div>
      <div className="container">
      <div className="row">
        <div className="col-2"></div>
      <Link className="col-2" to={`/updateSummary/${this.props.match.params.DR_NAME}/${this.props.match.params.release_name}/${this.props.match.params.TEAM}`}><button type="button" className="btn btn-primary" id="ViewDRSummary" >DRSummary</button></Link>
      <div className="col-2"></div>
      <div className="col-2"></div>
      <Link className="col-2" to={`/updateEffort/${this.props.match.params.DR_NAME}/${this.props.match.params.release_name}/${this.props.match.params.TEAM}`}><button type="button" className="btn btn-primary" id="ViewDREffort">DREfforts</button></Link>
      <div className="col-2"></div>
    </div>
    </div>
      <div className="disabledCursor">
      <Switch >
      <Route exact path={`/updateSummary/:DR_NAME/:release_name/:TEAM`} component={UpdateSummary}/>
      <Route exact path={`/updateEffort/:DR_NAME/:release_name/:TEAM`} component={UpdateEffort} />
      </Switch>
      </div>
      </div>
      </Router>
      </div>
    );
    }


  }
