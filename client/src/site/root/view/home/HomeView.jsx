import {Card, message} from "antd";
import useMenuSelect from "hook/useMenuSelect";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerValidate} from "redux/server/redux";
import ErrorResult from "site/root/view/home/ErrorResult";
import FailedResult from "site/root/view/home/FailedResult";
import HomeDashboard from "site/root/view/home/HomeDashboard";
import LoaderResult from "site/root/view/home/LoaderResult";
import RootView from "site/root/view/RootView";
import Events from "utils/Events";

const HomeContext = React.createContext({
	id: "root.home"
});

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
	useMenuSelect("root.home");
	return (
		<RootView context={HomeContext} id={"root.home"}>
			<Card title={t("root.home.title")}>
				<ResolveStatus status={status} validation={validation}/>
			</Card>
		</RootView>
	);
};
export default HomeView;
