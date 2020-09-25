package derivean.game.operator.operators

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value
import derivean.game.operator.AbstractOperator

class NoopOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
	}
}

fun Attribute.noop() = NoopOperator(this)
fun Value.noop() = Attribute(this.first, this.second).noop()
