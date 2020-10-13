import {Button, Result} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';

const ClientErrorView = ({t}) =>
	<Result
		status="500"
		title={t('error.client.title')}
		subTitle={t('error.client.body')}
		extra={<Button type="primary" onClick={() => window.location.reload()}>{t('common.refresh')}</Button>}
	/>
;

export default withTranslation()(ClientErrorView);
