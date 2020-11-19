import ReactDOM from "react-dom";
import "./assets/index.css";
import "./dayjs";
import DeRivean from "./DeRivean";
import "./i18n";
import * as ServiceWorker from "./ServiceWorker";

ReactDOM.render(
	<DeRivean/>,
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
