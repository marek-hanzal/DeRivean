import React from "react";
import {connect} from "react-redux";
import {onSessionClose} from "redux/session/action";

const SingOutView = ({onLogout}) => onLogout() || null;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => {
			dispatch(onSessionClose());
		}
	}),
)(SingOutView);
