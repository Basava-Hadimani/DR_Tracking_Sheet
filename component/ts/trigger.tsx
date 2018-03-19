import * as React from 'react';
const styles = require('../styles/table.scss');
import {GET, POST} from './CRUD.tsx';

interface MyComponentProps { /* declare your component's props here */ }
interface MyComponentState { teamName :  string, releaseName : string, dRNumber :string, manager : string,  plannedEE : string, phase : any, options : any }

class Triger extends React.Component <MyComponentProps, MyComponentState>  {
  constructor(props){
    super(props);
    this.state={
      teamName : '',
      releaseName : '',
      dRNumber : '',
      manager : '',
      plannedEE : '',
      phase : '',
      options : ''
    }

  }
  Phases:string[] = [];
  Teams:string[] = [];
  PSD:any = [];
  PED:any = [];

  eventPropagate = (e) =>{
                        this.setState({[e.target.id] : e.target.value});
  }

  save = (e) =>{
    let status = this.checkPSD_PED();
    if(this.state.teamName && this.state.releaseName && this.state.dRNumber && this.state.manager && this.state.plannedEE && status){
    POST(window['DRPlanRecords'], this.state.teamName, this.state.releaseName, this.state.dRNumber, this.state.manager, this.state.plannedEE);
    POST(window['DREfforts'], this.state.teamName, this.state.dRNumber, this.PSD, this.PED);

  }else{
    alert("Fill all the fields, If PSD is selected PED for the corresponing phase should also be selected");
    e.stopPropagation();
  }
  }

  checkPSD_PED = ()=>{
    let flag = true;
    for (let index = 0; index < this.Phases.length; index++){
      if(this.PSD[index]){
        if(this.PED[index]){
          flag = true;
        }else{
          flag = false;
          break;
        }

      }

    }

    return flag

  }

  updatePSD =(e, index)=>{
    this.PSD[index] = e.target.value;
  }

  updatePED =(e, index)=>{
    this.PED[index] = e.target.value;
  }

  componentWillMount () {
  window['DRPhaseRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPhase';
  window['TeamRecords'] = 'http://localhost:3000/ConnectionConfigFile/ProjectTeams';
  window['DRPlanRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPlanRecords';
  window['DREfforts'] = 'http://localhost:3000/ConnectionConfigFile/DREfforts';
  };

  componentDidMount(){
    GET(window['DRPhaseRecords'] ).then((response)=> {
      response.data.map((res, index)=>{
        this.Phases[index] = res.Phase;
      })
      const temp_options = this.Phases.map((item, index) =>(
        <div  className="table_row" key={index}>
        {item === 'Total Effort'?
        <div className='table_small'>
				<div className="table_cell" >	</div>
				<div className="table_cell" ></div>
				</div>
        :
				<div className='table_small'>
				<div className="table_cell" >	<p>PHASE</p></div>
				<div className="table_cell" >	{item}</div>
				</div>
      }
        {item === 'Total Effort'?
        <div className='table_small'>
				<div className="table_cell" >	</div>
				<div className="table_cell" ></div>
				</div>
        :
				<div className='table_small'>
				<div className="table_cell" >	<p>PSD</p></div>
				<div className="table_cell" >	<input id="inputTable" type="date" onChange={(e)=>{this.updatePSD(e, index)}}></input></div>
				</div>
      }
      {item === 'Total Effort'?
      <div className='table_small'>
      <div className="table_cell" >	</div>
      <div className="table_cell" ></div>
      </div>
      :
				<div className='table_small'>
				<div className="table_cell" >	<p>PED</p></div>
				<div className="table_cell" >	<input id="inputTable" type="date" onChange={(e) =>{this.updatePED(e, index)}}></input></div>
				</div>
      }
        </div>

      ));
      this.setState({phase : temp_options})
    })

    GET(window['TeamRecords'] ).then((response)=> {
      response.data.map((res, index)=>{
        this.Teams[index] = res.TEAM;
      })

      const temp_options = this.Teams.map((item, index) =>(<option key={index} value={item}>{item}</option>));

      this.setState({options:temp_options});


    })
  }

  componentDidUpdate(prevProp, prevState){

    console.log(this.PSD);
    console.log(this.PED);
  }

   render() {
      return (
        <div id="TrigerForm" onChange={(e) =>this.eventPropagate(e)} >
        <div className="container">
        <hr />
        <div className="row">
          <p className="detail col-12"><em>Enter the project details below</em></p>
        </div>
        </div>

        <div className="container">
        <div className="row">

        <div className="form-group col-6">
        <label className="control-label">Team Name:</label>
        <select id="teamName" className="TeamSelect form-control">
        <option value="" >Select team name</option>
        {this.state.options}
        </select>
        </div>

        <div className="form-group col-6">
        <label className="control-label">Release Name:</label>
        <input type="text" id="releaseName" className="form-control"   />
        </div>

        </div>
        </div>

        <div className="container">
        <div className="row">

        <div className="form-group col-6">
        <label className="control-label">DR Number:</label>
          <input type="text" id="dRNumber" className="form-control" />
        </div>

        <div className="form-group col-6">
        <label className="control-label">Manager:</label>
        <input type="text" id="manager" className="form-control"  />
        </div>

        </div>
        </div>

        <div className="container">
        <div className="row">

        <div className="form-group col-12">
        <label className="control-label">Planned EE:</label>
        <input type="number" id="plannedEE" className="form-control"  />
        </div>

        </div>
        </div>

        <div className="container">
        <div className="row">
        <div className="form-group col-12">
        <label className="control-label">PSD and PED:</label>
        <div className="table" id="results">
				<div className="theader">
				<div className="table_header">
					<p>PHASE</p>
				</div>
				<div className="table_header">
					<p>PSD</p>
				</div>
				<div className="table_header">
					<p>PED</p>
				</div>
        </div>
        {this.state.phase}
        </div>


        </div>
        </div>
        </div>

        <div className="container">
        <div className="row">

        <div className="form-group col-4">
        </div>

        <div className="form-group col-4">
        <input type="button" id="submitTrigger" className="form-control btn btn-info" value='Submit' onClick={(e)=>this.save(e)}></input>
        </div>

        <div className="form-group col-4">
        </div>
        </div>

        < hr />
        </div>


        </div>

      );
   }
}
export default Triger;
