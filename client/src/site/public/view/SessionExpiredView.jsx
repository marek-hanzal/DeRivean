import {Button, Card, Result} from "antd";
import {LayoutContext, useEnableFullscreen} from "component/layout/BaseLayout";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicView from "site/public/view/PublicView";
import Routes from "site/Routes";

const SessionExpiredView = () => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	useEnableFullscreen(layoutContext);
	return (
		<PublicView id={"public.session-expired"}>
			<Card>
				<Result
					status={"403"}
					title={t("public.session-expired.title")}
					subTitle={t("public.session-expired.subtitle")}
					extra={
						<Link
							to={Routes.public.link()}
							children={
								<Button
									type="primary"
									key="continue"
									children={t("public.session-expired.continue")}
								/>
							}
						/>
					}
				/>
			</Card>
		</PublicView>
	);
};

export default SessionExpiredView;
