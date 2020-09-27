package derivean.game.operator

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.operator.operators.inc

class Operators(private val operators: MutableList<IOperator> = mutableListOf()) {
	constructor(vararg operators: IOperator) : this(operators.toMutableList())

	operator fun plusAssign(values: Array<out Attribute>) {
		for (value in values) {
			operators.add(value.inc())
		}
	}

	fun applyTo(attributes: Attributes) {
		for (operator in operators) {
			operator.operator(attributes)
		}
	}
}
