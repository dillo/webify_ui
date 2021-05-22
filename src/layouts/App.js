import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from '../components/landing/Landing'

import '../styles/tailwind.output.css'
import '../styles/App.css'

function App() {
  const app_classes = {
    main_container: 'app'
  }

  return (
    <Router>
      <div className={app_classes.main_container}>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
