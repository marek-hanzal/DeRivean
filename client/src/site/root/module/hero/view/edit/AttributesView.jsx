import {message} from "antd";
import BaseEditor from "component/form/BaseEditor";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import {useStore} from "react-redux";
import {doHeroUpdate} from "redux/hero/redux";
import AttributesEditor from "site/root/component/AttributesEditor";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";

const AttributesView = () => {
	const store = useStore();
	const {t} = useTranslation();
	useMenuSelect(["root.hero.attributes"]);
	return (
		<HeroView>
			<HeroContext.Consumer>
				{({id}) => (
					<BaseEditor
						readyCount={2}
						onFinish={(values, initials) => {
							doHeroUpdate(
								store.getState(),
								{id: initials.id, ...values},
								() => message.success(t(`${id}.attributes.updated`)),
							);
						}}
						name={id}
						translation={id}
						children={<AttributesEditor context={HeroContext}/>}
					/>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default AttributesView;
