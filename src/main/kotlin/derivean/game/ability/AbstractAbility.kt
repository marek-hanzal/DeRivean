package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.mutator.IMutator

abstract class AbstractAbility(val name: String, val entity: Entity, val mutator: IMutator) : IAbility
