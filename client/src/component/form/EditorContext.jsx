import React from "react";

const EditorContext = React.createContext({
	editor: null,
	setEditor: () => ({}),
});

export default EditorContext;
