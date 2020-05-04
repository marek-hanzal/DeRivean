package derivean.game.entity

data class Entity(
	val health: Double,
	val attack: Attack
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var health: Double = 0.0
		var attack: Attack = Attack.build { }

		fun attack(block: Attack.Builder.() -> Unit) {
			attack = Attack.build(block)
		}

		fun build() = Entity(
			health,
			attack
		)
	}
}
