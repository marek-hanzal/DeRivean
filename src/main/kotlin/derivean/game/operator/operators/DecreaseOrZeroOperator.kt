package derivean.game.operator.operators

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value
import derivean.game.operator.AbstractOperator
import kotlin.math.max

class DecreaseOrZeroOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
		attributes.set(attribute.name, max(attributes[attribute.name] - attribute.value, 0.0))
	}
}

fun Attribute.decOrZero() = DecreaseOrZeroOperator(this)
fun Value.decOrZero() = Attribute(this.first, this.second).decOrZero()
