package derivean.game.attribute

import derivean.game.operator.IOperator
import derivean.game.operator.Operators

data class Result(val duel: Duel, val source: Operators, val target: Operators) {
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

		fun source(vararg values: Value) {
			source += values
		}

		fun target(vararg operators: IOperator) {
			target = Operators(*operators)
		}

		fun target(vararg values: Value) {
			target += values
		}

		fun build(duel: Duel) = Result(duel, source, target)
	}
}
