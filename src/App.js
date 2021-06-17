import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GalleryPage from './pages/Gallery';
import HomePage from './pages/Home';

function App() {
  const [scrollRequest, setScrollRequest] = useState(false);
  function onScrollToAbout() {
    setScrollRequest(true);
  }
  return (
    <Layout scrollToAbout={onScrollToAbout}>
      <Switch>
        <Route path='/' exact>
          <HomePage scrollToAbout={scrollRequest}/>
        </Route>
        <Route path='/gallery'>
          <GalleryPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
