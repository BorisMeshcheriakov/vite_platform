import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from 'core/theme';
import './index.css';
import { store } from 'core/redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

