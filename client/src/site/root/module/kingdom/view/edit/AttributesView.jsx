import {message} from "antd";
import BaseEditor from "component/form/BaseEditor";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {dispatchKingdomUpdate} from "redux/kingdom/redux";
import AttributesEditor from "site/root/component/AttributesEditor";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const AttributesView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	useMenuSelect(["root.kingdom.attributes"]);
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{({id}) => (
					<BaseEditor
						readyCount={2}
						onFinish={(values, initials) => {
							dispatchKingdomUpdate(dispatch, {id: initials.id, ...values}, () => {
								message.success(t(`${id}.attributes.updated`));
							});
						}}
						name={id}
						translation={id}
						children={<AttributesEditor context={KingdomContext}/>}
					/>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default AttributesView;
