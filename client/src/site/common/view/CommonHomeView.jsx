import {Button, Card, Divider, Result} from "antd";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import Placeholder from "component/Placeholder";
import BackLink from "component/route/BackLink";
import PropTypes from "prop-types";
import {createElement, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";

const ContextView = (
	{
		menu,
		children
	}) => {
	const {t} = useTranslation();
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const navigate = useNavigate();
	const moduleContext = useContext(ModuleContext);
	const layoutContext = useContext(LayoutContext);
	layoutContext.useMenuSelect([menu]);
	moduleContext.fetch(
		params[moduleContext.param],
		Events()
			.on("success", data => {
				setData(data);
				layoutContext.setFetch(data);
				setLoading(false);
			})
			.on("error", () => {
				setLoading(false);
			})
	);
	return (
		<Card title={<><BackLink/>{t(`${moduleContext.id}.title`)}</>}>
			<Result
				status={"info"}
				icon={<Spinner done={!loading} icon={moduleContext.icon}/>}
				title={
					<>
						<Button type={"primary"} size={"large"} icon={<EditIcon/>} ghost onClick={() => {
							navigate(moduleContext.link.edit.link(params[moduleContext.param]));
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
	const moduleContext = useContext(ModuleContext);
	return (
		createElement(
			moduleContext.baseView,
			{},
			<ContextView {...props}/>
		)
	);
};

CommonHomeView.propTypes = {
	children: PropTypes.func.isRequired,
	menu: PropTypes.string.isRequired,
};

export default CommonHomeView;
