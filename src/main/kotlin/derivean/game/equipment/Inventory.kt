package derivean.game.equipment

/**
 * Named set of individual Equipment.
 */
class Inventory(private val inventory: MutableList<IEquipment> = mutableListOf()) {
	constructor(vararg inventory: IEquipment) : this(mutableListOf(*inventory))

	/**
	 * Add an item to the Inventory.
	 */
	fun slot(equipment: IEquipment) = inventory.add(equipment)

	fun size() = inventory.size
}
