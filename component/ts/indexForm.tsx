import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Trigger from "./trigger.tsx";
import Edit from "./edit.tsx";
import {GET} from './CRUD.tsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/roleStore.js'

interface MyComponentProps { actions : any,
                              role : string
                            }
interface MyComponentState { options :  any}


class IndexForm extends React.Component<MyComponentProps, MyComponentState> {

  constructor(props){
    super(props);
    this.state={
      options : '',
    }
  }

  Resources:string[] = [];

  componentDidMount(){
    GET(window['ResourcesDatabase']).then((response)=> {
      response.data.map((res, index)=>{
        this.Resources[index] = res.Name;
      })
   const temp_options = this.Resources.map((item, index) =>(<option key={index} value={item}>{item}</option>));

   this.setState({options:temp_options});
    })
    }

  componentWillMount () {
  window['ResourcesDatabase'] = 'http://localhost:3000/ConnectionConfigFile/Resources';
  };


   render() {
      return (
        <div>
        <div id="select">
        <div className="container select">
        <div  className="row">
          <select id="Resources" className="col-4 selectpicker input-large">
            <option value="" >Select resouce</option>
            {this.state.options}
          </select>
          <p className="col-4"></p>
          <select onChange={(e) => {this.props.actions.addToStore(e.target.value); this.props.actions.nullifyCount()}}  id="Role" className="col-4 selectpicker input-large">
            <option value="" >Select role</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
          </select>
        </div>
        </div>
        </div>

        <Router>
        <div>
        <div id="button-triger" >
        <div className="container ">
        <div  className="row">
        {(this.props.role == 'Manager')?
        <Link to="/trigger" id="triggerLink"   className="col-12">Trigger a new project</Link>
        :
        <Link to="/trigger" id="triggerLink"   className="col-12 disabledCursor">Trigger a new project</Link>
        }
        </div>
        </div>
        </div>

        <Route path="/trigger" component={Trigger} />

        <div id="button-view">
        <div className="container">
        <div  className="row">
        {(this.props.role == 'Manager' || this.props.role == 'Developer' )?
        <Link to="/edit" className="col-12" id="editLink">Edit/view DR plan</Link>
        :
        <Link to="/edit" id="editLink"   className="col-12 disabledCursor">Edit/view DR plan</Link>
        }
        </div>
        </div>
        </div>

        <Route path="/edit" component={Edit} />

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

export default connect(mapStateToProps, mapDispatchToProps)(IndexForm);
