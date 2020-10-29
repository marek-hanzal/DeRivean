import {Col, Row} from "antd";

const Centered = ({children}) => {
	return (
		<Row justify={"center"}>
			<Col>
				{children}
			</Col>
		</Row>
	);
};

export default Centered;
