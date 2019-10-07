import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { getLoggedUser } from '../../utils/auth';
import _ from 'lodash';

export default function ProtectedRoute({ component : Component , render , showOnUser, ...rest }) {
    
    const isUser = _.isEmpty(getLoggedUser());
    
    if (showOnUser){

    return (
            <Route 
                {...rest}
                render={ props => {
                    if ( isUser ) return <Redirect to="/login" />;
                    return Component ?  <Component {...props} /> : render(props);
                } }
            />

        
    )

    }
    else {
        return (
        <Route 
            {...rest}
            render={ props => {
                if ( !isUser ) return <Redirect to="/" />;
                return Component ?  <Component {...props} /> : render(props);
            } }
        />
    )

    }
}
