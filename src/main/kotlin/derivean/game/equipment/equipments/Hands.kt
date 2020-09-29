package derivean.game.equipment.equipments

import derivean.game.equipment.AbstractEquipment
import derivean.game.equipment.Slot

class Hands : AbstractEquipment()

fun String.slotHands() = Slot(this, Hands())
