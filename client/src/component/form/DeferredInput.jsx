import {LoadingOutlined} from "@ant-design/icons";
import {Input} from "antd";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";

const DeferredInput = ({label, item, name}) => {
	const {t} = useTranslation();
	return (
		<Centered span={6}>
			<Input addonBefore={t(label)} value={item ? item[name] : null} disabled={!item} suffix={item ? null : <LoadingOutlined/>}/>
		</Centered>
	);
};

export default DeferredInput;
