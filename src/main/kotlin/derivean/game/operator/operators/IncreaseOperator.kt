package derivean.game.operator.operators

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.operator.AbstractOperator

class IncreaseOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
		attributes.set(attribute.first, attributes[attribute.first] + attribute.second)
	}
}

fun Attribute.inc() = IncreaseOperator(this)
