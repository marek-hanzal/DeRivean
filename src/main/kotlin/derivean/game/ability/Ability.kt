package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.mutator.IMutator

class Ability(ability: String, mutator: IMutator, attributes: Attributes = Attributes()) : AbstractAbility(ability, mutator, attributes)
