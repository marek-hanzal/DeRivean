package derivean.game.mutator.being

import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.common.physicalDefense
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator

/**
 * This mutator provides basic attributes and abilities related to human beings.
 */
class HumanMutator : AbstractMutator() {
	override fun mutate(entity: Entity, vararg targets: Entity) {
		entity.attributes(
			100.0.health(),
			50.0.mana(),
			5.0.physicalDefense(),
		)
//		entity.slot(
//			Hands(Attributes(
//				5.0.strength(),
//			)).equip("jmeno slotu; vrati Slot (Pair<String, IEquipment)"),
//		)
//		entity.equip(
//			"jmeno veci z inventare" to "hands",
//		)
	}
}
