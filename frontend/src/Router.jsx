import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Cart from './containers/Cart';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Item_details from './containers/Item_details';
import Items from './containers/Items';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/signin'} component={SignIn} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/item_details'} component={Item_details} />\
                <Route exact path={'/Items'} component={Items} />
            </Switch>
        </>
    );
};
export default Router;
