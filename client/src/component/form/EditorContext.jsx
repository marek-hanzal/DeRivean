import React from "react";

const EditorContext = React.createContext({
	editor: null,
	setEditor: () => ({}),
	errors: null,
	setErrors: null,
});

export default EditorContext;
