import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import rootReducer from './store/reducers';
import {apiMiddleware} from './store/middlewares/api';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
