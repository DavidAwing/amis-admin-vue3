import React from 'react';
import { ToastComponent, AlertComponent, Spinner } from 'amis';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import { IMainStore } from '../../../../store';

const Preview = React.lazy(() => import('./Preview'));
const Editor = React.lazy(() => import('./Editor'));


export default observer(function ({ store }: { store: IMainStore }): any {
  return (

    // @ts-ignore
    <Router>
      <div className="routes-wrapper">
        <ToastComponent key="toast" position={'top-right'} />
        <AlertComponent key="alert" />
        { /* @ts-ignore */}
        <React.Suspense
          fallback={<Spinner overlay className="m-t-lg" size="lg" />}
        >
          { /* @ts-ignore */}
          <Switch>
            { /* @ts-ignore */}
            <Redirect to={`/hello-world`} from={`/`} exact />
            { /* @ts-ignore */}
            <Route path="/edit/:id" component={Editor} />
            { /* @ts-ignore */}
            <Route component={Preview} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>

  );
});
