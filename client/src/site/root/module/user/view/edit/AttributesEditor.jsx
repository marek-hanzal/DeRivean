import {Card, Divider, Result} from "antd";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useUserFetch} from "redux/user/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import values from "utils/form/values";

const AttributesEditor = ({context}) => {
	const {t} = useTranslation();
	const currentContext = useContext(context);
	const editorContext = useContext(EditorContext);
	const params = useParams();
	useUserFetch(params.user, fetch => {
		editorContext.setInitials(fetch);
		values(editorContext.form, fetch);
		editorContext.setEnableSubmit(true);
		editorContext.isReady();
	});
	return (
		<Card title={t(`${currentContext.id}.attributes.title`)}>
			<Result
				icon={<Spinner icon={<AttributeIcon/>} done={!editorContext.ready}/>}
				title={
					<>
						<EditorToolbar param={"user"} redux={currentContext.redux} translation={currentContext.id}/>
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
