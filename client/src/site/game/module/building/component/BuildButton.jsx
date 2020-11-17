import {Button} from "antd";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BuildButton = ({building}) => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	return (
		<Button
			type={"primary"}
			onClick={() => alert("postavim budovu!")}
			children={t(moduleContext.id + ".build")}
		/>
	);
};

export default BuildButton;
