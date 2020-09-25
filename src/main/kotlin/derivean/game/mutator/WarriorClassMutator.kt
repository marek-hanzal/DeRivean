package derivean.game.mutator

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.classMage
import derivean.game.attribute.common.classWarrior
import derivean.game.operator.Operators
import derivean.game.operator.operators.set

class WarriorClassMutator : AbstractMutator() {
	override fun evaluate(attributes: Attributes) = Operators(
		1.0.classWarrior().set(),
		(-1.0).classMage().set(),
	)
}
