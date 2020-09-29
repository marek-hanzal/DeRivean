package derivean.game.equipment.equipments

import derivean.game.attribute.Attributes
import derivean.game.equipment.AbstractEquipment
import derivean.game.equipment.Slot

class Hands(attributes: Attributes) : AbstractEquipment(attributes)

fun String.slotHands(block: Attributes.() -> Unit) = Slot(this, Hands(Attributes().also(block)))
