import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutMePage from './pages/AboutMe';
import ContactPage from './pages/Contact';
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
        <Route path='/about-me'>
          <AboutMePage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
