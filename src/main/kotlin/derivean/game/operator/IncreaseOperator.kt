package derivean.game.operator

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value

class IncreaseOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
		attributes.set(attribute.name, attributes[attribute.name] + attribute.value)
	}
}

fun Attribute.inc() = IncreaseOperator(this)
fun Value.inc() = Attribute(this.first, this.second).inc()
