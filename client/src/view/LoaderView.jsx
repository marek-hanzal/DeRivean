import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import React from 'react';

const LoaderView = () =>
	<Spin spinning={true} indicator={<LoadingOutlined style={{fontSize: 42}}/>}>
		<div style={{height: '100vh'}}/>
	</Spin>
;

export default LoaderView;
