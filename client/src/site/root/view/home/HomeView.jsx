import {Card} from "antd";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {ServerRedux} from "redux/server/redux";
import ErrorResult from "site/root/view/home/ErrorResult";
import LoaderResult from "site/root/view/home/LoaderResult";
import SuccessResult from "site/root/view/home/SuccessResult";
import RootView from "site/root/view/RootView";

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
		<RootView id={"root.home"}>
			<Card title={t("root.home.title")}>
				{
					validation ?
						(validation.errors.length ? <ErrorResult validation={validation}/> : <SuccessResult/>) :
						<LoaderResult/>
				}
			</Card>
		</RootView>
	);
};
export default HomeView;
