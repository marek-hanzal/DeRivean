import {Card} from "antd";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {ServerRedux} from "redux/server/redux";
import ErrorResult from "site/root/view/home/ErrorResult";
import HomeDashboard from "site/root/view/home/HomeDashboard";
import LoaderResult from "site/root/view/home/LoaderResult";
import RootView from "site/root/view/RootView";

const HomeContext = React.createContext({
	id: "root.home"
});

const HomeView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [validation, setValidation] = useState();

	useEffect(() => {
		dispatch(ServerRedux.redux.validate.dispatch.validate()).then(validation => {
			setValidation(validation);
		});
	}, [dispatch]);

	useMenuOpen(["root.blog", "root.user"]);
	useMenuSelect("root.home");

	return (
		<RootView context={HomeContext} id={"root.home"}>
			<Card title={t("root.home.title")}>
				{
					validation ?
						(validation.errors.length ? <ErrorResult validation={validation}/> : <HomeDashboard/>) :
						<LoaderResult/>
				}
			</Card>
		</RootView>
	);
};
export default HomeView;
