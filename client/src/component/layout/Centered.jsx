import {Col, Row} from "antd";

const Centered = ({children, span = null}) => {
	return (
		<Row justify={"center"}>
			<Col span={span}>
				{children}
			</Col>
		</Row>
	);
};

export default Centered;
