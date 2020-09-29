package derivean.game.equipment

/**
 * Named set of individual Equipment.
 */
class Equipments(val map: MutableMap<String, IEquipment> = mutableMapOf()) {
	/**
	 * Equip and return item from the original slot (if any).
	 */
	fun equip(slot: String, equipment: IEquipment): IEquipment? = map[slot].also {
		map[slot] = equipment
	}
}
