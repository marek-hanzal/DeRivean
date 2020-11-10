import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import "./assets/index.css";
import DeRivean from "./DeRivean";
import "./i18n";
import reducer from "./redux/reducer";
import * as ServiceWorker from "./ServiceWorker";

// noinspection JSUnresolvedVariable,JSUnresolvedFunction
const store = createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

ReactDOM.render(
	<Provider store={store} children={<DeRivean/>}/>,
	document.getElementById("root")
);

// ServiceWorker.register({
ServiceWorker.unregister({
	onUpdate: () => {
		console.log("Update available");
	},
	onSuccess: () => {
		console.log("Offline available");
	},
});
