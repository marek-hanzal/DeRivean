import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storageSession from 'redux-persist/lib/storage/session';
import thunkMiddleware from 'redux-thunk';
import './assets/index.css';
import DeRivean from './DeRivean';
import './i18n';
import reducer from './redux/reducer';
import * as ServiceWorker from './ServiceWorker';

// noinspection JSUnresolvedVariable,JSUnresolvedFunction
const store = createStore(persistReducer({
		key: 'root',
		storage: storageSession,
		stateReconciler: autoMergeLevel2,
		whitelist: ['session'],
	}, reducer),
	compose(
		applyMiddleware(thunkMiddleware, createLogger()),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<DeRivean/>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// ServiceWorker.register({
ServiceWorker.unregister({
	onUpdate: () => {
		console.log('Update available');
	},
	onSuccess: () => {
		console.log('Offline available');
	},
});
