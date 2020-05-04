package derivean.game.entity

data class Defense(
	val physical: Double,
	val magical: Double
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var physical: Double = 0.0
		var magical: Double = 0.0

		fun build() = Defense(
			physical,
			magical
		)
	}
}
