package derivean.game.selector

class Selectors(private val selectors: MutableMap<String, ISelector> = mutableMapOf()) {
	fun add(name: String, selector: ISelector) {
		selectors[name] = selector
	}

	fun selector(name: String): ISelector = selectors[name] ?: throw UnknownSelectorException("Requested unknown selector [$name].")

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val selectors = mutableMapOf<String, ISelector>()

		fun selector(name: String, selector: ISelector) {
			selectors[name] = selector
		}

		fun build() = Selectors(selectors)
	}
}
