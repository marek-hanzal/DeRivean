import {Button, Card, Divider, Result} from "antd";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import Placeholder from "component/Placeholder";
import BackLink from "component/route/BackLink";
import PropTypes from "prop-types";
import {createElement, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";

const ContextView = (
	{
		context,
		param,
		menu,
		children
	}) => {
	const {t} = useTranslation();
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const navigate = useNavigate();
	const currentContext = useContext(context);
	const layoutContext = useContext(LayoutContext);
	param = currentContext.param || param;
	layoutContext.useMenuSelect([menu]);
	currentContext.fetch(
		params[param],
		Events()
			.on("success", data => {
				setData(data);
				setLoading(false);
				layoutContext.setFetch(data);
			})
			.on("error", () => {
				setLoading(false);
			})
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
	if (!currentContext) {
		throw new Error("Missing current context (not found by using props.context)!");
	}
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
	children: PropTypes.func.isRequired,
	menu: PropTypes.string.isRequired,
};

export default CommonHomeView;
