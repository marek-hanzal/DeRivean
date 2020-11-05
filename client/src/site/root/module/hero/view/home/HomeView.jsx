import {Button, Card, Divider, Result} from "antd";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import useMenuSelect from "hook/useMenuSelect";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import {useHeroFetch} from "redux/hero/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";

const HomeView = () => {
	const {t} = useTranslation();
	const params = useParams();
	const [hero, setHero] = useState();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useHeroFetch(
		params.hero,
		hero => {
			setHero(hero);
			setLoading(false);
		}, () => {
			setLoading(false);
		}
	);
	useMenuSelect(["root.hero"]);
	return (
		<HeroView>
			<h1>CREATE HOME VIEW BASED ON HERO VIEW!</h1>
			<HeroContext.Consumer>
				{({id, icon, link}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							status={"info"}
							icon={<Spinner done={!loading} icon={icon}/>}
							title={
								<>
									<Button type={"primary"} ghost onClick={() => {
										navigate(link.edit(params.hero));
									}} children={t("root.hero.edit.form.edit")}/>
									<Divider type={"horizontal"}/>
								</>
							}
							subTitle={
								<Placeholder data={hero} display={hero => hero.name}/>
							}
						/>
					</Card>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default HomeView;
