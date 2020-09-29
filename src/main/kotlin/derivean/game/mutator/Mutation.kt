package derivean.game.mutator

import derivean.game.attribute.Attribute
import derivean.game.attribute.Duel
import derivean.game.operator.IOperator
import derivean.game.operator.Operators

/**
 * Quite strange name for class holding result of "mutation". This class is (should be) responsible for applying
 * mutations computed by outside world (like Mutator or whatever).
 */
data class Mutation(val duel: Duel, val source: Operators, val target: Operators) {
	fun resolve() {
		duel.source += source
		duel.target += target
	}

	companion object {
		inline fun build(duel: Duel, block: Builder.() -> Unit) = Builder().apply(block).build(duel)
	}

	class Builder {
		private var source = Operators()
		private var target = Operators()

		fun source(vararg operators: IOperator) {
			source = Operators(*operators)
		}

		fun source(vararg values: Attribute) {
			source += values
		}

		fun target(vararg operators: IOperator) {
			target = Operators(*operators)
		}

		fun target(vararg values: Attribute) {
			target += values
		}

		fun build(duel: Duel) = Mutation(duel, source, target)
	}
}
