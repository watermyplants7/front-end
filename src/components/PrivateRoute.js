import React from "react";
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    // if authentication token is present, Component is returned. If no token present, user gets sent back to login page.
    return (<Route {...rest} render={() => {
      if (localStorage.getItem('token')) {
        return (<Component />);
      } else {
        return (
          <Redirect to='/login' />
        );
      };
    }} />)
  };
  
  export default PrivateRoute;