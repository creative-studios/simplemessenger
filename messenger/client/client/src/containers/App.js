import React from 'react';
import {Provider} from"react-redux";
import {configureStore} from "../store/index";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navBar';
import Main from './Main';
import { setAuthorizationToken ,setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';
const store = configureStore();
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }catch(err){
      store.dispatch(setCurrentUser({}));
  }
}
const App=()=>(
  <Provider store={store}>
    <div>
      <Router><div className="onboarding"><NavBar/><Main/></div></Router>
    </div>
  </Provider>
);
export default App;
