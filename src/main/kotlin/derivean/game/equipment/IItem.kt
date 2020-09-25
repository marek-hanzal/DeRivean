package derivean.game.equipment

import derivean.game.attribute.Attributes

/**
 * An equippable item.
 */
interface IItem {
	fun attributes(): Attributes
}
