package derivean.game.entity

import kotlin.math.max

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

	/**
	 * Creates a result Entity of a Damage. This could be used for affecting
	 * another Entity - for example health loss.
	 */
	fun entity() = Entity.build {
		health = -(max(0.0, physical) + max(0.0, magical))
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
