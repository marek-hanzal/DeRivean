import {SettingFilled} from "@ant-design/icons";
import {Result} from "antd";

const LoaderView = () =>
	<Result
		style={{marginTop: "10vh"}}
		icon={<SettingFilled spin style={{fontSize: 42}}/>}
	/>
;

export default LoaderView;
