import {Button, Card, Divider, Result} from "antd";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import BackLink from "component/route/BackLink";
import useMenuSelect from "hook/useMenuSelect";
import PropTypes from "prop-types";
import {createElement, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {NavigationRedux} from "redux/navigation/redux";

const ContextView = (
	{
		context,
		navigation,
		param,
		menu,
		children
	}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const navigate = useNavigate();
	const currentContext = useContext(context);
	param = currentContext.param || param;
	useMenuSelect([menu]);
	currentContext.fetch(
		params[param],
		data => {
			setData(data);
			setLoading(false);
			dispatch(NavigationRedux.params(navigation(data)));
		},
		() => {
			setLoading(false);
		}
	);
	return (
		<Card title={<><BackLink/>{t(`${currentContext.id}.title`)}</>}>
			<Result
				status={"info"}
				icon={<Spinner done={!loading} icon={currentContext.icon}/>}
				title={
					<>
						<Button type={"primary"} size={"large"} icon={<EditIcon/>} ghost onClick={() => {
							navigate(currentContext.link.edit.link(params[param]));
						}} children={t("root.edit.form.edit")}/>
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

const CommonHomeView = (props) => {
	const currentContext = useContext(props.context);
	return (
		createElement(
			currentContext.base,
			{},
			<ContextView {...props}/>
		)
	);
};

CommonHomeView.propTypes = {
	context: PropTypes.object.isRequired,
	navigation: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired,
	menu: PropTypes.string.isRequired,
};

export default CommonHomeView;
