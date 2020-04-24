import React, { Fragment } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import './sass/app.css';

// Component Imports
import Navbar from './components/layout/Navbar';
import SearchResults from './components/videos/SearchResults';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div>
          <h3>List Here</h3>
          <SearchResults />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
