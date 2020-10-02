package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.mutator.IMutator

class Ability(name: String, entity: Entity, mutator: IMutator) : AbstractAbility(name, entity, mutator) {
	fun use(targets: List<Entity> = listOf()) = mutator.mutate(entity, targets)
}
