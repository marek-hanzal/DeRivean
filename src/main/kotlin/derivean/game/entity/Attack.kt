package derivean.game.entity

/**
 * Attach is an input strength used against a defense to compute Damage.
 */
data class Attack(
	var physical: Double,
	var magical: Double
) {
	operator fun plusAssign(attack: Attack) {
		physical += attack.physical
		magical += attack.magical
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var physical: Double = 0.0
		var magical: Double = 0.0

		fun build() = Attack(
			physical,
			magical
		)
	}
}
