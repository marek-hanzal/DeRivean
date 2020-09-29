package derivean.game.equipment

/**
 * Named set of individual Equipment.
 */
class Inventory(val map: MutableMap<String, IEquipment> = mutableMapOf()) {
	/**
	 * Equip and return item from the original slot (if any).
	 */
	fun slot(slot: String, equipment: IEquipment): IEquipment? = map[slot].also {
		map[slot] = equipment
	}

	fun slot(slot: Slot) = slot(slot.first, slot.second)
}
