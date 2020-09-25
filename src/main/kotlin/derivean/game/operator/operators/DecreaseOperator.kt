package derivean.game.operator.operators

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value
import derivean.game.operator.AbstractOperator

class DecreaseOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
		attributes.set(attribute.name, attributes[attribute.name] - attribute.value)
	}
}

fun Attribute.dec() = DecreaseOperator(this)
fun Value.dec() = Attribute(this.first, this.second).dec()

