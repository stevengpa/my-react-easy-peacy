import React from 'react';
import {StoreProvider} from 'easy-peasy';

import './App.scss';
import {store} from './store';
import {LoadPeople} from './people/components/LoadPeople';

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <LoadPeople />
      </div>
    </StoreProvider>
  );
}

export default App;
