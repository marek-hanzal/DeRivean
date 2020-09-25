package derivean.game.equipment

class Equipment(private val equipment: MutableMap<String, IItem>) {
	fun equip(slot: String, item: IItem) {
		equipment[slot] = item
	}

	fun unequip(slot: String) {
		equipment.remove(slot)
	}
}
