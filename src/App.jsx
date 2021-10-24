import Index from 'pages';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'Styles/styles.css';
import HuskeyInfoPage from 'pages/huskey';
import Layout from 'Layouts/layout';
import BorderCollie from 'pages/borderCollie';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>

            <Route path='/huskey'>
              <HuskeyInfoPage />
            </Route>


            <Route path='/borderCollie'>
              <BorderCollie />
            </Route>

            <Route path='/'>
              <Index />
            </Route>

          </Switch>
        </Layout>
      </Router>
    </div>
  );
}


export default App;
