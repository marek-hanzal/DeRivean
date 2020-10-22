export default function rehref(href, params) {
	for (let [key, value] of Object.entries(params)) {
		href = href.replace(":" + key, value);
	}
	return href;
}
