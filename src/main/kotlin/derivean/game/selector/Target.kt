package derivean.game.selector

import derivean.game.ability.IAbility
import derivean.game.entity.Entity

class Target(val rank: Double, var entity: Entity, var target: Entity, var ability: IAbility) {
	fun resolve() = ability.use(entity, target)

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		lateinit var entity: Entity
		lateinit var target: Entity
		lateinit var ability: IAbility
		var rank = 0.0

		fun build() = Target(
			rank,
			entity,
			target,
			ability,
		)
	}
}
