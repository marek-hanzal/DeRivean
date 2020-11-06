import {Card, Divider, Form, Result} from "antd";
import axios from "axios";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import useMenuSelect from "hook/useMenuSelect";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {UserRedux} from "redux/user/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import values from "utils/form/values";

const AttributesView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const [data, setData] = useState();
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);
	const [enableSubmit, setEnableSubmit] = useState(false);
	const [form] = Form.useForm();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		dispatch(UserRedux.redux.fetch.dispatch.fetch(params.user, cancelToken)).then(fetch => {
			setData(fetch);
			values(form, fetch);
			setEnableSubmit(true);
		});
		return () => cancelToken.cancel();
	}, [dispatch, form, params.user]);
	useMenuSelect(["root.user.attributes"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{({id}) => (
					<Form
						form={form}
						onFinish={values => {
							console.log("submit!", {id: data.id, ...values});
						}}
					>
						<EditorContext.Provider value={{errors, setErrors, editor, setEditor, enableSubmit, setEnableSubmit}}>
							<Card title={t(`${id}.attributes.title`)}>
								<Result
									icon={<Spinner icon={<AttributeIcon/>} done={data}/>}
									title={
										<>
											<EditorToolbar form={form} initials={data} param={"user"} redux={UserRedux} translation={id}/>
											<Divider type={"horizontal"}/>
										</>
									}
									subTitle={t(`${id}.attributes.subtitle`)}
									children={
										<Centered span={16}>
											<AttributeFieldEditor translation={id} redux={UserRedux}/>
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
