package derivean.game.operator.operators

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value
import derivean.game.operator.AbstractOperator

class NegateOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
		attributes.set(attribute.name, attributes[attribute.name] + (-1 * attribute.value))
	}
}

fun Attribute.negate() = NegateOperator(this)
fun Value.negate() = Attribute(this.first, this.second).negate()
