import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'
import 'src/registerServiceWorker'
// import * as Routes from 'src/routes'
import { history, store } from 'src/store'
import Home from 'src/components/home/home'
import './style.css'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'))
