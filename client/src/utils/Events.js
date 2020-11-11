const Events = () => {
	return {
		events: {},
		on: function (event, callback, priority) {
			(this.events[event] = this.events[event] || []).push({priority, callback});
			return this;
		},
		call: function (event, ...data) {
			for (const item of (this.events[event] || []).sort((a, b) => a.priority - b.priority)) {
				if (item.callback(...data) === false) {
					break;
				}
			}
			return this;
		},
	};
};

export default Events;
