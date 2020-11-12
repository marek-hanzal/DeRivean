import {Card, message} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerValidate} from "site/root/hook/hook";
import ErrorResult from "site/root/view/home/ErrorResult";
import FailedResult from "site/root/view/home/FailedResult";
import HomeDashboard from "site/root/view/home/HomeDashboard";
import LoaderResult from "site/root/view/home/LoaderResult";
import RootView from "site/root/view/RootView";
import Events from "utils/Events";

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
	const layoutContext = useContext(LayoutContext);
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
	layoutContext.useMenuSelect("root.home");
	return (
		<ModuleContext.Provider value={{id: "root.home"}}>
			<ModuleContext.Consumer>
				{({id}) => (
					<RootView>
						<Card title={t(`${id}.title`)}>
							<ResolveStatus status={status} validation={validation}/>
						</Card>
					</RootView>
				)}
			</ModuleContext.Consumer>
		</ModuleContext.Provider>
	);
};
export default HomeView;
