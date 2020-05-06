package derivean.game.entity

data class Defense(
	var physical: Double,
	var magical: Double
) {
	operator fun plusAssign(defense: Defense) {
		physical += defense.physical
		magical += defense.magical
	}

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
