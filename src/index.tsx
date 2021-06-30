import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import reportWebVitals from './reportWebVitals';
import Store from './store/store';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Store>
                <Switch>
                    <div className="dark:bg-gray-800 dark:text-white h-screen w-screen">
                        <Route exact path="/">
                            <Redirect to="/app/home" />
                        </Route>
                        <Route path="/app/home">
                            <HomePage loc={history.location.pathname} />
                        </Route>
                    </div>
                </Switch>
            </Store>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

window.document.documentElement.classList.add('dark');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
