const handleSuccess = ({data}, events) => {
	events.call("success", data);
	events.call("done");
};

export default handleSuccess;
