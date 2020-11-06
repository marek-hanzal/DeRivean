import {Button, Card, Divider, Result} from "antd";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import useMenuSelect from "hook/useMenuSelect";
import PropTypes from "prop-types";
import {createElement, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {NavigationRedux} from "redux/navigation/redux";

const ContextView = ({context, fetch, navigation, param, menu, children}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const navigate = useNavigate();
	const currentContext = useContext(context);
	useMenuSelect([menu]);
	fetch(
		params[param],
		data => {
			setData(data);
			setLoading(false);
			dispatch(NavigationRedux.params(navigation(data)));
		}, () => {
			setLoading(false);
		}
	);
	return (
		<Card title={t(`${currentContext.id}.title`)}>
			<Result
				status={"info"}
				icon={<Spinner done={!loading} icon={currentContext.icon}/>}
				title={
					<>
						<Button type={"primary"} ghost onClick={() => {
							navigate(currentContext.link.edit.link(params[param]));
						}} children={t("root.hero.edit.form.edit")}/>
						<Divider type={"horizontal"}/>
					</>
				}
				subTitle={
					<h2><Placeholder data={data} display={data => data.name}/></h2>
				}
				children={data ? children(data) : null}
			/>
		</Card>
	);
};

const CommonHomeView = ({base, ...props}) => {
	return (
		createElement(
			base,
			{},
			<ContextView {...props}/>
		)
	);
};

CommonHomeView.propTypes = {
	base: PropTypes.func.isRequired,
	context: PropTypes.object.isRequired,
	param: PropTypes.string.isRequired,
	fetch: PropTypes.func.isRequired,
	navigation: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired,
	menu: PropTypes.string.isRequired,
};

export default CommonHomeView;
