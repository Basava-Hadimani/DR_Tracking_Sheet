import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Head from './head.tsx';
import Title from './title.tsx';
import Foot from './foot.tsx';
import IndexForm from './indexForm.tsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from  '../../reducer/allReducers.js';



ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<Title />, document.getElementById('title'));


ReactDOM.render(<Provider store={createStore(allReducers)}>
                <IndexForm />
                </Provider>
, document.getElementById('form'));


ReactDOM.render(<Foot />, document.getElementById('foot'));
