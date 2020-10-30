import {Col, Row} from "antd";
import PropTypes from "prop-types";

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

DualSection.propTypes = {
	left: PropTypes.node.isRequired,
	right: PropTypes.node.isRequired,
};

export default DualSection;
