import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchMissions } from './components/redux/features/missions/missionsSlice';
import App from './App';
import store from './components/redux/store';

store.dispatch(fetchMissions());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <main className="">
          <App />
        </main>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
