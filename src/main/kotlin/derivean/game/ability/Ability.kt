package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.mutator.IMutator

class Ability(name: String, mutator: IMutator, attributes: Attributes = Attributes()) : AbstractAbility(name, mutator, attributes)
