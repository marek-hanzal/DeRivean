const toActionName = name => `ON_${name.replace(/[-.]+/g, "_").toUpperCase()}`;

export default toActionName;
