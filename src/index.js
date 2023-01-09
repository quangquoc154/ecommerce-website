import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from '~/redux/store';
import { ToastContainer } from 'react-toastify';

import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <ToastContainer
          theme="light"
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <App />
      </Provider>
    </GlobalStyles>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
