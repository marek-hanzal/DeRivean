import {Client} from "component/client/Client";
import {Session} from "component/session/Session";
import Language from "component/system/Language";
import {Helmet} from "react-helmet";
import {BrowserRouter} from "react-router-dom";
import {default as GameSite} from "site/game/site/Site";
import {default as PublicSite} from "site/public/site/Site";
import {default as RootSite} from "site/root/site/Site";

const DeRivean = () => {
	return (
		<BrowserRouter>
			<Helmet titleTemplate="DeRivean | %s"/>
			<Client>
				<Language>
					<Session sites={{
						public: <PublicSite/>,
						game: <GameSite/>,
						root: <RootSite/>,
					}}/>
				</Language>
			</Client>
		</BrowserRouter>
	);
};

export default DeRivean;
