import {message} from "antd";
import BaseEditor from "component/form/BaseEditor";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {dispatchUserUpdate} from "redux/user/redux";
import UserContext from "site/root/module/user/component/UserContext";
import AttributesEditor from "site/root/module/user/view/edit/AttributesEditor";
import UserView from "site/root/module/user/view/UserView";

const AttributesView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	useMenuSelect(["root.user.attributes"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{({id}) => (
					<BaseEditor
						readyCount={2}
						onFinish={(values, initials) => {
							dispatchUserUpdate(dispatch, {id: initials.id, ...values}, () => {
								message.success(t(`${id}.attributes.updated`));
							});
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
