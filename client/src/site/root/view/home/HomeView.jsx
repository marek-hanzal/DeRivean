import {Card} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import ServerRedux from "redux/server/redux";
import ErrorResult from "site/root/view/home/ErrorResult";
import SuccessResult from "site/root/view/home/SuccessResult";
import RootView from "site/root/view/RootView";

const HomeView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [validation, setValidation] = useState({lockdown: false, errors: []});

	useEffect(() => {
		dispatch(ServerRedux.redux.validate.dispatch.validate()).then(validation => {
			setValidation(validation);
		});
	}, [dispatch]);

	return (
		<RootView
			id={"root.home"}
			open={["root.blog", "root.user"]}
		>
			<Card title={t("root.home.title")}>
				{validation.errors.length ? <ErrorResult validation={validation}/> : <SuccessResult/>}
			</Card>
		</RootView>
	);
};
export default HomeView;