package derivean.game.equipment

class Equipments(val map: MutableMap<String, IEquipment> = mutableMapOf()) {
	fun equip(slot: Pair<IEquipment, String>) = map.put(slot.second, slot.first)
}
