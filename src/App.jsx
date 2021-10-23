import Index from 'pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'Styles/styles.css';
import HuskeyInfoPage from 'pages/huskey';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/huskey'>
            <HuskeyInfoPage/>
          </Route>

          <Route path='/'>
            <Index />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}


export default App;
