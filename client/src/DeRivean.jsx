import React, {Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Client from './component/Config';
import Discovery from './component/Discovery';
import InternalRouter from './site/internal/router/InternalRouter';
import PublicRouter from './site/public/router/PublicRouter';
import RootRouter from './site/root/router/RootRouter';
import LoaderView from './view/LoaderView';

const DeRivean = ({router}) =>
	<BrowserRouter>
		<Helmet titleTemplate='DeRivean | %s'/>
		<Suspense fallback={<LoaderView/>}>
			<Client href='/client.json'>
				<Discovery>
					{{
						public: <PublicRouter/>,
						internal: <InternalRouter/>,
						root: <RootRouter/>
					}[router]}
				</Discovery>
			</Client>
		</Suspense>
	</BrowserRouter>
;

export default connect(
	state => ({
		router: 'root',
	}),
	dispatch => ({})
)(DeRivean);
