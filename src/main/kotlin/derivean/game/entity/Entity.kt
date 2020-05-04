package derivean.game.entity

data class Entity(
	val health: Double
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var health: Double = 0.0

		fun build() = Entity(
			health
		)
	}
}
