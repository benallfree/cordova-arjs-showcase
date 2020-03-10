import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'

const Marker = React.lazy(() => import('./demos/Marker'))

export const Root: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/marker">
            <Marker />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  )
}
