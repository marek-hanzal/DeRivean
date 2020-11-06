import {Card, Divider, Form, Result} from "antd";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import useMenuSelect from "hook/useMenuSelect";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useUserFetch} from "redux/user/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import values from "utils/form/values";

const AttributesView = () => {
	const {t} = useTranslation();
	const params = useParams();
	const [initials, setInitials] = useState();
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);
	const [enableSubmit, setEnableSubmit] = useState(false);
	const [form] = Form.useForm();
	useUserFetch(params.user, fetch => {
		setInitials(fetch);
		values(form, fetch);
		setEnableSubmit(true);
	});
	useMenuSelect(["root.user.attributes"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{({id, redux}) => (
					<Form
						form={form}
						onFinish={values => {
							console.log("submit!", {id: initials.id, ...values});
						}}
					>
						<EditorContext.Provider value={{errors, setErrors, editor, setEditor, enableSubmit, setEnableSubmit, initials, setInitials}}>
							<Card title={t(`${id}.attributes.title`)}>
								<Result
									icon={<Spinner icon={<AttributeIcon/>} done={initials}/>}
									title={
										<>
											<EditorToolbar form={form} initials={initials} param={"user"} redux={redux} translation={id}/>
											<Divider type={"horizontal"}/>
										</>
									}
									subTitle={t(`${id}.attributes.subtitle`)}
									children={
										<Centered span={16}>
											<AttributeFieldEditor translation={id} redux={redux}/>
										</Centered>
									}
								/>
							</Card>
						</EditorContext.Provider>
					</Form>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default AttributesView;
