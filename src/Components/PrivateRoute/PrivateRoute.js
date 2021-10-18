import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuthContext from '../AuthContext/useAuthContext';

const PrivateRoute = ({children, ...rest}) => {


    const {user} = useAuthContext()
    console.log(user);

    return (
      <Route 
      {...rest}
      render={({location})=>
          
          user.email? children :
          <Redirect to={{
              pathname : '/login',
              state:{from :location}
          }}
           > </Redirect>}

      
      
      
      >















      </Route>
    );
};

export default PrivateRoute;