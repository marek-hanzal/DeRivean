import {Col, Row} from "antd";

const DualSection = ({left, right}) => {
	return (
		<Row>
			<Col xs={24} xl={12}>
				{left}
			</Col>
			<Col xs={24} xl={12}>
				{right}
			</Col>
		</Row>
	);
};

export default DualSection;
