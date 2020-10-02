package derivean.game.ability

import derivean.game.entity.Entity

interface IAbility {
	fun use(entity: Entity, targets: List<Entity> = listOf())
}
