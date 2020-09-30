package derivean.game.equipment

import derivean.game.attribute.Attributes

class Equipments(val map: MutableMap<String, IEquipment> = mutableMapOf()) {
	fun equip(slot: Pair<IEquipment, String>) = map.put(slot.second, slot.first)

	fun attributes() = Attributes().apply {
	}
}
