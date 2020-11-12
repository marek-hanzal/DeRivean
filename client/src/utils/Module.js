class Module {
	id;
	baseView;
	icon;
	link;
	create;
	update;
	delete;
	fetch;
	page;
	param;
	parent;
	validateFields = ["id", "baseView", "icon", "link", "create", "update", "delete", "fetch", "page", "param", "parent"];

	constructor(id) {
		this.id = id;
	}

	validate(fields = this.validateFields) {
		for (const field of fields) {
			if (!this[field]) {
				throw new Error(`Missing [${field}] in module [${this._id}] (call ${field}(...) to setup a field)!`);
			}
		}
		return this;
	}
}

export default Module;
