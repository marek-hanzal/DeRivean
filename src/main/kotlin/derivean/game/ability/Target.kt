package derivean.game.ability

import derivean.game.entity.Entity

class Target(val rank: Double, var entity: Entity, var target: Entity, var ability: IAbility) {
	fun resolve() = ability.use(entity, target)

	companion object {
		inline fun build(entity: Entity, target: Entity, ability: IAbility, block: Builder.() -> Unit) = Builder(entity, target, ability).apply(block).build()
	}

	class Builder(var entity: Entity, var target: Entity, var ability: IAbility) {
		var rank = 0.0

		fun build() = Target(
			rank,
			entity,
			target,
			ability,
		)
	}
}
