
import '../styles/globals.css';
import Head from 'next/head';
import list from '../reducers/list';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
 reducer: {list},
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Todo list</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
