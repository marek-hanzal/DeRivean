package derivean.game.entity

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.equipment.Equipments
import derivean.game.equipment.IEquipment

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
class Entity(
	val name: String,
	private val attributes: Attributes,
	private val equipments: Equipments,
) {
	override fun toString() = name

	fun attributes(vararg attributes: Attribute) = this.attributes.set(*attributes)

	fun attributes() = Attributes().also {
		it.set(attributes)
	}

	/**
	 * Add an Equipment to a slot.
	 */
	fun equip(slot: Pair<IEquipment, String>) = equipments.equip(slot)

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()
		private var equipments = Equipments()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun equip(slot: Pair<IEquipment, String>) = equipments.equip(slot)

		fun build() = Entity(
			name,
			attributes,
			equipments,
		)
	}
}
