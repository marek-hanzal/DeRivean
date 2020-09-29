package derivean.game.equipment.equipments

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.equipment.AbstractEquipment
import derivean.game.equipment.Slot

class Hands(attributes: Attributes) : AbstractEquipment(attributes)

fun String.slotHands(vararg attributes: Attribute) = Slot(this, Hands(Attributes(*attributes)))
