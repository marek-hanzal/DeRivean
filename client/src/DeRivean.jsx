import React, {Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Client from './component/Config';
import Discovery from './component/Discovery';
import {getDiscoveryHref} from './redux/client/payload/selector';
import {default as InternalRouter} from './router/internal/Router';
import {default as PublicRouter} from './router/public/Router';
import {default as RootRouter} from './router/root/Router';
import LoaderView from './view/LoaderView';
import NotFoundView from './view/NotFoundView';

const DeRivean = ({router, discovery}) =>
	<BrowserRouter>
		<Helmet titleTemplate='DeRivean | %s'/>
		<Suspense fallback={<LoaderView/>}>
			<Client href='/client.json'>
				<Discovery href={discovery}>
					<Switch>
						{{
							public: <PublicRouter/>,
							internal: <InternalRouter/>,
							root: <RootRouter/>
						}[router]}
						<Route component={NotFoundView}/>
					</Switch>
				</Discovery>
			</Client>
		</Suspense>
	</BrowserRouter>
;

const mapStateToProps = state => ({
	router: 'root',
	discovery: getDiscoveryHref(state),
});

export default connect(mapStateToProps)(DeRivean);