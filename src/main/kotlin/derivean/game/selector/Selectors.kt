package derivean.game.selector

class Selectors {
	private val selectors = mutableMapOf<String, ISelector>()

	fun add(name: String, selector: ISelector) {
		selectors[name] = selector
	}

	fun selector(name: String): ISelector = selectors[name] ?: throw UnknownSelectorException("Requested unknown selector [$name].")
}
