const toActionName = name => `ON_${name.replace(/[-.]/, "_").toUpperCase()}`;

export default toActionName;
