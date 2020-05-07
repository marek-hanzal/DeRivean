package derivean.game.entity

data class Spirit(val name: String, val entity: Entity) {
	override fun toString(): String {
		return "Spirit(name='$name')"
	}

	companion object {
		inline fun build(name: String, entity: Entity, block: Builder.() -> Unit) = Builder(name, entity).apply(block).build()
	}

	class Builder(val name: String, val entity: Entity) {
		fun build() = Spirit(name, entity)
	}
}
