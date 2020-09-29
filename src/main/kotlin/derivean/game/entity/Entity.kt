package derivean.game.entity

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.equipment.Inventory
import derivean.game.equipment.Slot

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(
	val name: String,
	val attributes: Attributes,
	val inventory: Inventory,
) {
	override fun toString() = name

	fun attributes(vararg attributes: Attribute) = this.attributes.set(*attributes)

	/**
	 * Add an Equipment to a slot in Inventory (not being Equipped).
	 */
	fun slot(equip: Slot) {
		inventory.slot(equip)
	}

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()
		private var inventory = Inventory()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun slot(slot: Slot) = inventory.slot(slot)

		fun build() = Entity(
			name,
			attributes,
			inventory,
		)
	}
}
