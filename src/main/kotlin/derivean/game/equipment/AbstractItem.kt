package derivean.game.equipment

import derivean.game.attribute.Attributes

abstract class AbstractItem(private val attributes: Attributes) : IItem {
	override fun attributes() = attributes
}
