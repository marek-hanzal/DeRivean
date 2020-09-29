package derivean.game.equipment.equipments.weapons

import derivean.game.attribute.Attributes
import derivean.game.equipment.AbstractEquipment
import derivean.game.equipment.Slot

class Sword(attributes: Attributes) : AbstractEquipment(attributes)

fun String.slotSword(block: Attributes.() -> Unit) = Slot(this, Sword(Attributes().also(block)))
