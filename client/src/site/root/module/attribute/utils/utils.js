const attributeFilterByGroup = (group, attributes) => attributes.filter(item => item.type.group.name === group);

export {
	attributeFilterByGroup,
};
