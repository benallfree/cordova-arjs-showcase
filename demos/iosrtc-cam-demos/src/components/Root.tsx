import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'

const BasicGetUserMedia = React.lazy(() => import('./demos/BasicGetUserMedia'))
const GetUserMediaCanvas = React.lazy(() =>
  import('./demos/GetUserMediaCanvas')
)
const PositioningTest = React.lazy(() => import('./demos/PositioningTest'))

export const Root: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/basicGetUserMedia">
            <BasicGetUserMedia />
          </Route>
          <Route path="/getusermedia-canvas">
            <GetUserMediaCanvas />
          </Route>
          <Route path="/positioning-test">
            <PositioningTest />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  )
}
