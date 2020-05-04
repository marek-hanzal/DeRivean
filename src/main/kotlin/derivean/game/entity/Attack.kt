package derivean.game.entity

/**
 * Attach is an input strength used against a defense to compute Damage.
 */
data class Attack(
	val physical: Double,
	val magical: Double
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	/**
	 * Run an attack against the given defense and return Damage with resulted values (like
	 * affected health, ...).
	 */
	fun damage(defense: Defense) = Damage.build {
		physical = this@Attack.physical - defense.physical
		magical = this@Attack.magical - defense.magical
	}

	/**
	 * Do a damage on innocent target without any defense.
	 */
	fun damage() = damage(Defense.build {})

	class Builder {
		var physical: Double = 0.0
		var magical: Double = 0.0

		fun build() = Attack(
			physical,
			magical
		)
	}
}
