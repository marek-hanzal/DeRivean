import {Button, Card, Result} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const SingInView = () => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	layoutContext.useEnableFullscreen();
	return (
		<ModuleContext.Provider value={{id: "root.sign-in"}}>
			{({id}) => (
				<RootView>
					<Card>
						<Result
							status={"success"}
							title={t(`${id}.succeed.title`)}
							subTitle={t(`${id}.succeed.subtitle`)}
							extra={[
								<Button type="primary" key="continue">
									<Link to={Routes.root.link()}>{t(`${id}.continue`)}</Link>
								</Button>
							]}
						/>
					</Card>
				</RootView>
			)}

		</ModuleContext.Provider>
	);
};

export default SingInView;
