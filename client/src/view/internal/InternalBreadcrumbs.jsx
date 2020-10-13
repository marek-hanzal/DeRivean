import {Breadcrumb} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

const InternalBreadcrumbs = ({breadcrumbs, t}) =>
	<Breadcrumb style={{margin: '16px 0'}}>
		{breadcrumbs.map(breadcrumb => (
			<Breadcrumb.Item key={breadcrumb.id}>
				{
					breadcrumb.href ?
						<Link to={breadcrumb.href} className='ant-breadcrumb-link'>
							{breadcrumb.icon}
							<span>{t(breadcrumb.title)}</span>
						</Link> :
						<>
							{breadcrumb.icon}
							<span>{t(breadcrumb.title)}</span>
						</>
				}
			</Breadcrumb.Item>
		))}
	</Breadcrumb>
;

export default withTranslation()(InternalBreadcrumbs);
