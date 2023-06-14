import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'
import TeamCard from './components/TeamCard'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="team-matches" component={TeamMatches} />
        <Route exact path="/team/:id" component={TeamCard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
