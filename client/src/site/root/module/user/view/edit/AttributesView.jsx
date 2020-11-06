import {Card, Divider, Result} from "antd";
import BaseEditor from "component/form/BaseEditor";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import useMenuSelect from "hook/useMenuSelect";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useUserFetch} from "redux/user/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
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
	});
	return (
		<Card title={t(`${currentContext.id}.attributes.title`)}>
			<Result
				icon={<Spinner icon={<AttributeIcon/>} done={editorContext.initials}/>}
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

const AttributesView = () => {
	useMenuSelect(["root.user.attributes"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{({id}) => (
					<BaseEditor
						onFinish={(values, initials) => {
							console.log("submit!", {id: initials.id, ...values});
						}}
						name={"user"}
						translation={id}
						children={<AttributesEditor context={UserContext}/>}
					/>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default AttributesView;
