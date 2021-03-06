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
	validateFields = ["id", "baseView", "icon", "link", "create", "update", "delete", "fetch", "page", "param"];

	constructor(id) {
		this.id = id;
	}

	validate(fields = this.validateFields) {
		for (const field of fields) {
			if (!this[field]) {
				throw new Error(`Missing [${field}] field in module [${this.id}]!`);
			}
		}
		return this;
	}
}

export default Module;
