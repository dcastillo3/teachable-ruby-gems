import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../views';

const Routes = props => {
    return (
        <Switch>
            {/* Application Routes */}
            <Route exact path="/" component={Home} />

            {/* Default component to display */}
            <Route component={Home} />
        </Switch>
    )
}

export default Routes;