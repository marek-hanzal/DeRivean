package derivean.game.equipment

import derivean.game.attribute.Attributes

/**
 * Equipment could be... equipped. It could be for example "hands" for
 * Humans or "Armor"... or whatever.
 */
interface IEquipment {
	val attributes: Attributes
}
