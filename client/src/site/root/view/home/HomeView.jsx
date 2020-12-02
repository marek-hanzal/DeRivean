import {Events, ModuleContext, useLayoutContext} from "@leight-core/leight";
import {Card, message} from "antd";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerValidate} from "../../hook/hook";
import RootView from "../RootView";
import ErrorResult from "./ErrorResult";
import FailedResult from "./FailedResult";
import HomeDashboard from "./HomeDashboard";
import LoaderResult from "./LoaderResult";

const ResolveStatus = (
	{
		validation,
		status
	}) => {
	switch (status) {
		case false:
			return <FailedResult/>;
		case "unavailable":
			return <HomeDashboard/>;
		default:
			return validation ?
				(validation.errors.length ? <ErrorResult validation={validation}/> : <HomeDashboard/>) :
				<LoaderResult/>;
	}
};

const HomeView = () => {
	const {t} = useTranslation();
	const [validation, setValidation] = useState();
	const [status, setStatus] = useState(true);
	const layoutContext = useLayoutContext();
	useServerValidate(
		Events()
			.on("success", validation => {
				setValidation(validation);
				setStatus(true);
			})
			.on("error", () => {
				setStatus(false);
				message.error(t("root.home.validation-failed.message"));
			})
			.on("http-403", () => setStatus("unavailable"))
	);
	layoutContext.useMenuSelect(["root.home"]);
	return (
		<ModuleContext.Provider value={{id: "root.home"}}>
			<ModuleContext.Consumer>
				{({id}) => (
					<RootView>
						<Card title={t(id + ".title")}>
							<ResolveStatus status={status} validation={validation}/>
						</Card>
					</RootView>
				)}
			</ModuleContext.Consumer>
		</ModuleContext.Provider>
	);
};
export default HomeView;
