import {combineReducers} from 'redux';


const reducer =(state = [], action) => {
  switch(action.type){
    case 'addRole' :

                        return [action.item];

    default :
                          return state;


  }

}

const reduceCount = (state = 0, action) =>{
  switch(action.type){
    case 'IncrementCount' :

                        return [state + 1];
    case 'NullifyCount' :
                          state = 0
                          return state;

    default :
                          return state;

                        }
}


 const allReducers = combineReducers  ({

  reducer : reducer,
  reduceCount : reduceCount

});


export default allReducers;
