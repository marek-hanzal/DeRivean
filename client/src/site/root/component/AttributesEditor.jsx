import {Card, Divider, Result} from "antd";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import values from "utils/form/values";

const AttributesEditor = ({context, fetch}) => {
	const {t} = useTranslation();
	const currentContext = useContext(context);
	const editorContext = useContext(EditorContext);
	const params = useParams();
	fetch(params[currentContext.param], fetch => {
		editorContext.setInitials(fetch);
		values(editorContext.form, fetch);
		editorContext.setEnableSubmit(true);
		editorContext.isReady();
	});
	return (
		<Card title={<><BackLink/>{t(`${currentContext.id}.attributes.title`)}</>}>
			<Result
				icon={<Spinner icon={<AttributeIcon/>} done={!editorContext.ready}/>}
				title={
					<>
						<EditorToolbar param={currentContext.param} redux={currentContext.redux} translation={currentContext.id}/>
						<Divider type={"horizontal"}/>
					</>
				}
				subTitle={t(`${currentContext.id}.attributes.subtitle`)}
				children={
					<Centered span={16}>
						<AttributeFieldEditor translation={currentContext.id} redux={currentContext.redux}/>
					</Centered>
				}
			/>
		</Card>
	);
};

export default AttributesEditor;
