package derivean.game.mutator

import derivean.game.entity.Entity
import derivean.game.operator.Operators

abstract class AbstractMutator : IMutator {
	override fun evaluate(entity: Entity): Operators = evaluate(entity.attributes)

	override fun mutate(entity: Entity) {
		evaluate(entity).applyTo(entity.attributes)
	}
}
