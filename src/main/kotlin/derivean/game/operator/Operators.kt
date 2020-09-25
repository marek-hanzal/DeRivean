package derivean.game.operator

import derivean.game.attribute.Value

class Operators(private val operators: MutableList<IOperator> = mutableListOf()) {
	constructor(vararg operators: IOperator) : this(operators.toMutableList())

	operator fun plusAssign(values: Array<out Value>) {
		for (value in values) {
			operators.add(value.inc())
		}
	}
}
