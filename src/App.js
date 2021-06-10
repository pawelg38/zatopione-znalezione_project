import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GalleryPage from './pages/Gallery';
import HomePage from './pages/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/gallery'>
          <GalleryPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
