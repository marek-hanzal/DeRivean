package derivean.game.equipment

import derivean.game.attribute.Attributes

/**
 * Equipment could be... equipped. It could be for example "hands" for
 * Humans or "Armor"... or whatever.
 */
interface IEquipment {
	/**
	 * Name of this Equipment (should be unique in general, like "Frost Sword of Kind Death".
	 */
	val equipment: String

	/**
	 * Attributes of this Equipment - those will be added to Entity on evaluation.
	 */
	val attributes: Attributes
}
