package derivean.game.entity

/**
 * An Entity is a general attribute holder; it could be an Hero or a Weapon, Item, whatever.
 * Or it could also be a result of some Effect.
 */
data class Entity(
	val health: Double,
	val attack: Attack,
	val defense: Defense
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var health: Double = 0.0
		private var attack: Attack = Attack.build { }
		private var defense: Defense = Defense.build { }

		fun attack(block: Attack.Builder.() -> Unit) {
			attack = Attack.build(block)
		}

		fun defense(block: Defense.Builder.() -> Unit) {
			defense = Defense.build(block)
		}

		fun build() = Entity(
			health,
			attack,
			defense
		)
	}
}
