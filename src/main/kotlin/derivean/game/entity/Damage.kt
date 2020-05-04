package derivean.game.entity

/**
 * Damage is an object holding final values which could be applied to an Entity as damage (for example health loss,
 * wearing or other attributes).
 */
data class Damage(
	val physical: Double,
	val magical: Double
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var physical: Double = 0.0
		var magical: Double = 0.0

		fun build() = Damage(
			physical,
			magical
		)
	}
}
