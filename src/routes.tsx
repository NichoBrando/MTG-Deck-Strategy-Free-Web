import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;