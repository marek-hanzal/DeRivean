package derivean.game.equipment.equipments.weapons

import derivean.game.equipment.AbstractEquipment
import derivean.game.equipment.Slot

class Sword : AbstractEquipment()

fun String.slotSword() = Slot(this, Sword())
