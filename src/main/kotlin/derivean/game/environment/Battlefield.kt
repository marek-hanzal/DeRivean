package derivean.game.environment

import derivean.game.behaviour.AttackBehaviour
import derivean.game.behaviour.IBehaviour
import derivean.game.entity.Spirit

class Battlefield : Environment() {
	override fun behaviorOf(spirit: Spirit): IBehaviour = AttackBehaviour()

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Battlefield(
		)
	}
}
