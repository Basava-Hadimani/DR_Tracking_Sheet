import * as React from 'react';
const styles = require('../styles/table.scss');
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {UpdateSummary, UpdateEffort, View} from "./update.tsx";
import PageTransition from 'react-router-page-transition';
import {GET, POST} from './CRUD.tsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/roleStore.js';

interface MyComponentProps {role : any,
                            count : any,
                            actions : any
                          }
interface MyComponentState { Records :  any,
                              DR_NAME : string,
                              release_name : string,
                              TEAM :string
                            }
class Edit extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props){
    super(props);
    this.state={
      Records : '',
      DR_NAME : '',
      release_name : '',
      TEAM : ''
    }

  }
  DRPlanRecords:string[] = [];
  componentWillMount () {
  window['DRPlanRecords'] = 'http://localhost:3000/ConnectionConfigFile/DRPlanRecords';
  };

  store=(item)=>{
      this.setState({DR_NAME : item["DR_NAME"],release_name : item["release_name"],TEAM : item["TEAM"]})
    }




  getRecords(){

    console.log("I am inside")
    GET(window['DRPlanRecords']).then((response)=> {
      response.data.map((res, index)=>{
        this.DRPlanRecords[index] = res;
      })
    const temp_options = this.DRPlanRecords.map((item, index) =>
      {
        return(

        <div  className="table_row" key={index}>

                <div className='table_small'>
                <div className="table_cell" >	<p>DR Number</p></div>
                <div className="table_cell" >	{item["DR_NAME"]}</div>
                </div>
                <div className='table_small'>
                <div className="table_cell" >	<p>Release name</p></div>
                <div className="table_cell" >	{item["release_name"]}</div>
                </div>
                <div className='table_small'>
                <div className="table_cell" >	<p>Team</p></div>
                <div className="table_cell" >	{item["TEAM"]}</div>
                </div>
                <div className='table_small'>
                <div className="table_cell" >	<p>Update Summary</p></div>
                <div  className="table_cell" >
                {(this.props.role == 'Manager')?
                <Link to={`/updateSummary/${item["DR_NAME"]}/${item["release_name"]}/${item["TEAM"]}`}><button id="linkToUpdateSummary" onClick={() => {this.store(item)}} >Update</button></Link>
                :
                <Link to='/updateSummary' className="disabledCursor"><button id="linkToUpdateSummary" onClick={() => {this.store(item)}} >Update</button> </Link>
                }
                </div>
                </div>
                <div className='table_small'>
                <div className="table_cell" >	<p>Effort Update</p></div>
                <div  className="table_cell" >
                {(this.props.role == 'Manager')?
                <Link to={`/updateEffort/${item["DR_NAME"]}/${item["release_name"]}/${item["TEAM"]}`}><button id="linkToUpdateEffort">Update</button></Link>
                :
                <Link to='/updateEffort' className="disabledCursor"><button id="linkToUpdateEffort" onClick={() => {this.store(item)}} >Update</button> </Link>
                }
                </div>
                </div>
                <div className='table_small'>
                <div className="table_cell" >	<p>View</p></div>
                <div className="table_cell" >	<Link  to={`/linkToView/${item["DR_NAME"]}/${item["release_name"]}/${item["TEAM"]}`}><button id="linkToView" >View</button></Link></div>
                </div>

        </div>

      )});

      this.setState({Records : temp_options});
    })
  }

  shouldComponentUpdate(nextProp, nextState){

      if (this.props.role === nextProp.role){
        if(this.props.count === 0){
          this.props.actions.incrementCount(this.props.count);
          return true
        }
        else
        return false
      }

    return true
  }


   render() {
     console.log(this.props.role);
      return (
        <div id="TableData">
        <Router>
        <div>
        <div className="container">
        <div id="results">
        <hr />
        			<div className="table" >
        				<div className="theader">
        				<div className="table_header">
        					<p>DR Number</p>
        				</div>
        				<div className="table_header">
        					<p>Release name</p>
        				</div>
        				<div className="table_header">
        					<p>Team</p>
        				</div>
        				<div className="table_header">
        					<p>Update Summary</p>
        				</div>
        				<div className="table_header">
        					<p>Effort Update</p>
        				</div>
        				<div className="table_header">
        					<p>View</p>
        				</div>
                </div>
                {this.getRecords()}
                {this.state.Records}
                </div>
              <hr />
        		</div>
            </div>
            <div id="switch">
            <Switch >
            <Route exact path={`/updateSummary/:DR_NAME/:release_name/:TEAM`} component={UpdateSummary}/>
            <Route exact path={`/updateEffort/:DR_NAME/:release_name/:TEAM`} component={UpdateEffort} />
            <Route exact path={`/linkToView/:DR_NAME/:release_name/:TEAM`} component={View} />
            </Switch>
            </div>
            </div>
            </Router>
            </div>

      );
   }
}

function mapStateToProps(state, props) {
    return {
        role: state.reducer,
        count : state.reduceCount
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Edit);
