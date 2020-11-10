import {Result} from "antd";
import LoaderIcon from "component/icon/LoaderIcon";

const LoaderView = () =>
	<Result
		icon={<LoaderIcon spin style={{fontSize: 42}}/>}
	/>
;

export default LoaderView;
