import reducerSimpleActions from "utils/action/reducerSimpleActions";
import {
	onBreadcrumbs,
	onSider
} from "./action";

export default reducerSimpleActions([onBreadcrumbs, onSider], {
	sider:       true,
	breadcrumbs: true
});
