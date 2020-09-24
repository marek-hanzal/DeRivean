package derivean.game.operator

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value

class SetOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
		attributes.set(attribute.name, attribute.value)
	}
}

fun Attribute.set() = SetOperator(this)
fun Value.set() = Attribute(this.first, this.second).set()
