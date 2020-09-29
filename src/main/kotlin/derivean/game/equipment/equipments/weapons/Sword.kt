package derivean.game.equipment.equipments.weapons

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.equipment.AbstractEquipment

class Sword(attributes: Attributes) : AbstractEquipment(attributes)

fun String.slotSword(vararg attributes: Attribute) = Sword(Attributes(*attributes))
