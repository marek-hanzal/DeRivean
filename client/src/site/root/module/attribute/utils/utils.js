const attributeFilterByGroup = (group, attributes) => attributes.filter(item => item.type.group.name === group);

const attributeFindByType = (group, type, attributes) => attributeFilterByGroup(group, attributes).filter(item => item.type.name === type).shift();

export {
	attributeFilterByGroup,
	attributeFindByType,
};
