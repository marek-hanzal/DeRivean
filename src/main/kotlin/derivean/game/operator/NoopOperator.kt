package derivean.game.operator

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value

class NoopOperator(attribute: Attribute) : AbstractOperator(attribute) {
	override fun operator(attributes: Attributes) {
	}
}

fun Attribute.noop() = NoopOperator(this)
fun Value.noop() = Attribute(this.first, this.second).set()
